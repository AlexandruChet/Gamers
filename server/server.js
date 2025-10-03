const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const PORT = 8000;
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

  const streamPath = found
    ? filePath
    : path.join(CLIENT_PATH, "404.html");

  const ext = path.extname(streamPath).toLowerCase() || ".html";
  const stream = fs.createReadStream(streamPath);

  return { found, ext, stream };
};

http
  .createServer(async (req, res) => {
    try {
      const file = await prepareFile(req.url);
      const statusCode = file.found ? 200 : 404;
      const mimeType = MIME_TYPES[file.ext] || "text/html; charset=UTF-8";

      res.writeHead(statusCode, { "Content-Type": mimeType });
      file.stream.pipe(res);

      console.log(`${req.method} ${req.url} ${statusCode}`);
    } catch (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Server Error");
      console.error(err);
    }
  })
  .listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}`);
