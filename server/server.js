const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const PORT = 8000;
const STATIC_PATH = path.join(__dirname, "../client/dist");

const MIME_TYPES = {
  ".html": "text/html; charset=UTF-8",
  ".js": "application/javascript; charset=UTF-8",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

http
  .createServer((req, res) => {
    let filePath = path.join(
      STATIC_PATH,
      req.url === "/" ? "index.html" : req.url
    );
    let ext = path.extname(filePath);

    fs.readFile(filePath, (err, data) => {
      if (err) {
        fs.readFile(path.join(STATIC_PATH, "404.html"), (err2, data2) => {
          if (err2) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Server Error");
            return;
          }
          res.writeHead(404, { "Content-Type": MIME_TYPES[".html"] });
          res.end(data2);
        });
        return;
      }

      res.writeHead(200, {
        "Content-Type": MIME_TYPES[ext] || "application/octet-stream",
      });
      res.end(data);
    });
  })
  .listen(PORT, () => {
    console.log(`✅ Server running at http://127.0.0.1:${PORT}`);
  });
