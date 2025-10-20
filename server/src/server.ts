const fs = require("fs");
const path = require("path");
const http = require("http");
const { createHmac } = require("crypto");
import type { IncomingMessage, ServerResponse } from "http";

const PORT: number = Number(process.env.PORT) || 3000;
const STATIC_PATH = path.join(__dirname, "../../client/dist");
const toBool = [(): boolean => true, (): boolean => false];

type MimeTypes = Record<string, string>;

const MIME_TYPES: MimeTypes = {
  html: "text/html; charset=UTF-8",
  css: "text/css",
  js: "text/javascript",
  mjs: "text/javascript",
  json: "application/json",
  xml: "application/xml",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  gif: "image/gif",
  webp: "image/webp",
  svg: "image/svg+xml",
  ico: "image/x-icon",
  bmp: "image/bmp",
  avif: "image/avif",
  mp3: "audio/mpeg",
  wav: "audio/wav",
  ogg: "audio/ogg",
  m4a: "audio/mp4",
  flac: "audio/flac",
  mp4: "video/mp4",
  webm: "video/webm",
  ogv: "video/ogg",
  avi: "video/x-msvideo",
  mov: "video/quicktime",
  mkv: "video/x-matroska",
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ppt: "application/vnd.ms-powerpoint",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  txt: "text/plain",
  ttf: "font/ttf",
  otf: "font/otf",
  woff: "font/woff",
  woff2: "font/woff2",
  eot: "application/vnd.ms-fontobject",
  zip: "application/zip",
  rar: "application/vnd.rar",
  "7z": "application/x-7z-compressed",
  tar: "application/x-tar",
  gz: "application/gzip",
  csv: "text/csv",
  wasm: "application/wasm",
  exe: "application/vnd.microsoft.portable-executable",
  default: "application/octet-stream",
};

const prepareFile = async (url: string) => {
  const cleanedUrl = url.split("?")[0];
  const paths = [STATIC_PATH, cleanedUrl];
  if (cleanedUrl.endsWith("/")) paths.push("index.html");

  const filePath = path.join(...paths);
  const resolvedPath = path.resolve(filePath);
  const pathTraversal = !resolvedPath.startsWith(STATIC_PATH);

  const exists: boolean = await fs.promises
    .access(resolvedPath)
    .then(toBool[0])
    .catch(toBool[1]);

  const found: boolean = !pathTraversal && exists;

  const notFoundPath = path.join(STATIC_PATH, "404.html");
  const fallbackPath = (await fs.promises
    .access(notFoundPath)
    .then(toBool[0])
    .catch(toBool[1]))
    ? notFoundPath
    : path.join(STATIC_PATH, "index.html");

  const streamPath = found ? resolvedPath : fallbackPath;
  const stat = await fs.promises.stat(streamPath);

  if (stat.size > 15 * 1024 * 1024) throw new Error("File too large");

  const ext = path.extname(streamPath).substring(1).toLowerCase();
  const stream = fs.createReadStream(streamPath);

  const forbidden = [
    ".env",
    ".git",
    ".gitignore",
    "package.json",
    "tsconfig.json",
  ];
  if (forbidden.some((f) => resolvedPath.endsWith(f))) {
    throw new Error("Access to forbidden file");
  }

  return { found, ext, stream, size: stat.size, lastModified: stat.mtime };
};

const getRequestBody = (req: IncomingMessage): Promise<string> =>
  new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => resolve(body));
    req.on("error", (err) => reject(err));
  });

const serverHttp = http.createServer(
  async (req: IncomingMessage, res: ServerResponse) => {
    try {
      if (!req.url) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: false, message: "Bad Request" }));
        return;
      }

      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");

      if (req.method === "OPTIONS") {
        res.writeHead(204);
        res.end();
        return;
      }

      if (req.method === "POST" && req.url === "/submit-password") {
        const body = await getRequestBody(req);
        const formData = new URLSearchParams(body);
        const password = formData.get("password");

        if (!password) {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              success: false,
              message: "❌ No password received.",
            })
          );
          return;
        }

        const secret = "my-secret-key";
        const hash = createHmac("sha256", secret)
          .update(password)
          .digest("hex");
        console.log("🔒 Password hashed:");

        const pathToFile = "./data/users.json";
        let users: any[] = [];

        try {
          const data = await fs.promises.readFile(pathToFile, "utf-8");
          users = data ? JSON.parse(data) : [];
        } catch (err) {
          console.log("File not found, will create new one.");
        }

        users.push({ encryptedPassword: hash });

        await fs.promises.writeFile(pathToFile, JSON.stringify(users, null, 2));

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            success: true,
            message: "✅ Password received and hashed on the server!",
          })
        );
        return;
      }

      if (req.url === "/favicon.ico") {
        res.writeHead(204);
        res.end();
        return;
      }

      const file = await prepareFile(req.url);
      const statusCode = file.found ? 200 : 404;
      const mimeType = MIME_TYPES[file.ext] || MIME_TYPES.default;

      res.writeHead(statusCode, { "Content-Type": mimeType });
      file.stream.pipe(res);

      console.log(`${req.method} ${req.url} ${statusCode}`);
    } catch (error) {
      console.error("Server error:", error);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({ success: false, message: "Internal Server Error" })
      );
    }
  }
);

serverHttp.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
