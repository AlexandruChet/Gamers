const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { createHmac } = require("node:crypto");

const PORT = process.env.PORT || 8000;
const CLIENT_PATH = path.join(__dirname, "../client/dist");

const MIME_TYPES = {
  ".html": "text/html; charset=UTF-8",
  ".js": "application/javascript; charset=UTF-8",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".tsx": "text/plain; charset=UTF-8",
};

const prepareFile = async (url) => {
  let filePath = path.join(CLIENT_PATH, url);
  if (url.endsWith("/")) filePath = path.join(filePath, "index.html");

  const resolvedPath = path.resolve(filePath);
  const pathTraversal = !resolvedPath.startsWith(CLIENT_PATH);

  const exists = await fs.promises
    .access(resolvedPath)
    .then(() => true)
    .catch(() => false);

  const found = !pathTraversal && exists;
  const streamPath = found ? filePath : path.join(CLIENT_PATH, "404.html");

  const ext = path.extname(streamPath).toLowerCase() || ".html";
  const stream = fs.createReadStream(streamPath);

  return { found, ext, stream };
};

http
  .createServer(async (req, res) => {
    if (req.method === "POST" && req.url === "/submit-password") {
      let body = "";

      req.on("data", (chunk) => (body += chunk));

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
        return res.end("✅ Password received and hashed on the server!");
      });

      return;
    }

    try {
      const file = await prepareFile(req.url);
      const statusCode = file.found ? 200 : 404;
      const mimeType = MIME_TYPES[file.ext] || "text/html; charset=UTF-8";

      res.writeHead(statusCode, { "Content-Type": mimeType });
      file.stream.pipe(res);

      console.log(`${req.method} ${req.url} ${statusCode}`);
    } catch (err) {
      console.error("Server error:", err);
      res.writeHead(500, { "Content-Type": "text/plain; charset=UTF-8" });
      res.end("Internal Server Error");
    }
  })
  .listen(PORT, () => {
    console.log(`🚀 Server running at http://127.0.0.1:${PORT}`);
  });
