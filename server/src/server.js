"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var http = require("http");
var createHmac = require("node:crypto").createHmac;
var PORT = Number(process.env.PORT) || 3000;
var STATIC_PATH = path.join(__dirname, "../../client/dist");
var MIME_TYPES = {
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
var prepareFile = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var cleanedUrl, paths, filePath, resolvedPath, pathTraversal, exists, _a, found, streamPath, ext, stream;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                cleanedUrl = url.split("?")[0];
                paths = [STATIC_PATH, cleanedUrl];
                if (cleanedUrl.endsWith("/"))
                    paths.push("index.html");
                filePath = path.join.apply(path, paths);
                resolvedPath = path.resolve(filePath);
                pathTraversal = !resolvedPath.startsWith(STATIC_PATH);
                exists = false;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, fs.promises.access(resolvedPath)];
            case 2:
                _b.sent();
                exists = true;
                return [3 /*break*/, 4];
            case 3:
                _a = _b.sent();
                exists = false;
                return [3 /*break*/, 4];
            case 4:
                found = !pathTraversal && exists;
                streamPath = found
                    ? resolvedPath
                    : path.join(STATIC_PATH, "index.html");
                ext = path.extname(streamPath).substring(1).toLowerCase();
                stream = fs.createReadStream(streamPath);
                return [2 /*return*/, { found: found, ext: ext, stream: stream }];
        }
    });
}); };
var serverHttp = http.createServer(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body_1, file, statusCode, mimeType, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                if (!req.url) {
                    res.writeHead(400, { "Content-Type": "text/plain" });
                    res.end("Bad Request");
                    return [2 /*return*/];
                }
                if (req.method === "POST" && req.url === "/submit-password") {
                    body_1 = "";
                    req.on("data", function (chunk) { return (body_1 += chunk); });
                    req.on("end", function () {
                        var formData = new URLSearchParams(body_1);
                        var password = formData.get("password");
                        if (!password) {
                            res.writeHead(400, { "Content-Type": "text/plain; charset=UTF-8" });
                            return res.end("❌ No password received.");
                        }
                        var secret = "my-secret-key";
                        var hash = createHmac("sha256", secret)
                            .update(password)
                            .digest("hex");
                        console.log("🔒 Password hash:", hash);
                        res.writeHead(200, { "Content-Type": "text/plain; charset=UTF-8" });
                        return res.end("✅ Password received and hashed on the server!");
                    });
                    return [2 /*return*/];
                }
                if (req.url === "/favicon.ico") {
                    res.writeHead(204);
                    res.end();
                    return [2 /*return*/];
                }
                return [4 /*yield*/, prepareFile(req.url)];
            case 1:
                file = _a.sent();
                statusCode = file.found ? 200 : 404;
                mimeType = MIME_TYPES[file.ext] || MIME_TYPES.default;
                res.writeHead(statusCode, { "Content-Type": mimeType });
                file.stream.pipe(res);
                console.log("".concat(req.method, " ").concat(req.url, " ").concat(statusCode));
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error("Server error:", error_1);
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
serverHttp.listen(PORT, function () {
    console.log("\uD83D\uDE80 Server running at http://localhost:".concat(PORT));
});
