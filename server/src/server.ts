const fs = require("fs");
const path = require("path");
const http = require("http");
const { createHmac } = require("node:crypto");
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
  const cleanedUrl: string = url.split("?")[0];
  const paths: string[] = [STATIC_PATH, cleanedUrl];
  if (cleanedUrl.endsWith("/")) paths.push("index.html");

  const filePath: string = path.join(...paths);
  const resolvedPath: string = path.resolve(filePath);
  const pathTraversal: boolean = !resolvedPath.startsWith(STATIC_PATH);

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
  const stat = await await fs.promises.stat(streamPath);
  console.log(stat.size);
  if (stat.size > 15 * 1024 * 1024) {
    throw new Error("File too large");
  }

  const ext: string = path.extname(streamPath).substring(1).toLowerCase();
  const stream = fs.createReadStream(streamPath);
  console.log(
    `📄 Serving file: ${streamPath} (${found ? "FOUND" : "NOT FOUND"})`
  );

  const forbidden: string[] = [
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

const serverHttp = http.createServer(
  async (req: IncomingMessage, res: ServerResponse) => {
    try {
      if (!req.url) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Bad Request");
        return;
      }

      if (req.method === "POST" && req.url === "/submit-password") {
        let body = "";

        req.on("data", (chunk: any) => (body += chunk));
        req.on("end", () => {
          const formData = new URLSearchParams(body);
          const password = formData.get("password");

          if (!password) {
            res.writeHead(400, { "Content-Type": "text/plain; charset=UTF-8" });
            return res.end("❌ No password received.");
          }

          const secret = "my-secret-key";
          const hash = createHmac("sha256", secret)
            .update(password)
            .digest("hex");

          console.log("🔒 Password hash:", hash);

          res.writeHead(200, { "Content-Type": "text/plain; charset=UTF-8" });

          interface save {
            encryptedPassword: string;
          }
          const savedInfoUser: save = {
            encryptedPassword: `${hash}`,
          };

          const pathToFile: string = "./data/users.json";
          let users = [];

          if (fs.existsSync(pathToFile)) {
            const data = fs.readFileSync(pathToFile, "utf-8");
            if (data) {
              try {
                users = JSON.parse(data);
              } catch (err: any) {
                console.error("Error", err);
              }
            }
          }
          users.push(savedInfoUser);

          return res.end("✅ Password received and hashed on the server!");
        });

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
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    }
  }
);

serverHttp.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
