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
var createHmac = require("crypto").createHmac;
var PORT = Number(process.env.PORT) || 3000;
var STATIC_PATH = path.join(__dirname, "../../client/dist");
var MIME_TYPES = {
    html: "text/html; charset=UTF-8",
    css: "text/css",
    js: "text/javascript",
    mjs: "text/javascript",
    json: "application/json",
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    webp: "image/webp",
    svg: "image/svg+xml",
    ico: "image/x-icon",
    default: "application/octet-stream",
};
// --- Helper to convert promise result to boolean ---
var toBool = [function () { return true; }, function () { return false; }];
// --- Prepare static file ---
var prepareFile = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var cleanedUrl, paths, filePath, resolvedPath, pathTraversal, exists, found, notFoundPath, fallbackPath, streamPath, stat, ext, stream, forbidden;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                cleanedUrl = url.split("?")[0];
                paths = [STATIC_PATH, cleanedUrl];
                if (cleanedUrl.endsWith("/"))
                    paths.push("index.html");
                filePath = path.join.apply(path, paths);
                resolvedPath = path.resolve(filePath);
                pathTraversal = !resolvedPath.startsWith(STATIC_PATH);
                return [4 /*yield*/, fs.promises
                        .access(resolvedPath)
                        .then(toBool[0])
                        .catch(toBool[1])];
            case 1:
                exists = _a.sent();
                found = !pathTraversal && exists;
                notFoundPath = path.join(STATIC_PATH, "404.html");
                return [4 /*yield*/, fs.promises
                        .access(notFoundPath)
                        .then(toBool[0])
                        .catch(toBool[1])];
            case 2:
                fallbackPath = (_a.sent())
                    ? notFoundPath
                    : path.join(STATIC_PATH, "index.html");
                streamPath = found ? resolvedPath : fallbackPath;
                return [4 /*yield*/, fs.promises.stat(streamPath)];
            case 3:
                stat = _a.sent();
                if (stat.size > 15 * 1024 * 1024)
                    throw new Error("File too large");
                ext = path.extname(streamPath).substring(1).toLowerCase();
                stream = fs.createReadStream(streamPath);
                forbidden = [
                    ".env",
                    ".git",
                    ".gitignore",
                    "package.json",
                    "tsconfig.json",
                ];
                if (forbidden.some(function (f) { return resolvedPath.endsWith(f); })) {
                    throw new Error("Access to forbidden file");
                }
                return [2 /*return*/, { found: found, ext: ext, stream: stream, size: stat.size, lastModified: stat.mtime }];
        }
    });
}); };
// --- Read request body safely ---
var getRequestBody = function (req) {
    return new Promise(function (resolve, reject) {
        var body = "";
        req.on("data", function (chunk) { return (body += chunk); });
        req.on("end", function () { return resolve(body); });
        req.on("error", function (err) { return reject(err); });
    });
};
// --- HTTP server ---
var serverHttp = http.createServer(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, formData, password, secret, hash, pathToFile, users, data, err_1, file, statusCode, mimeType, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 9, , 10]);
                if (!req.url) {
                    res.writeHead(400, { "Content-Type": "application/json" });
                    res.end(JSON.stringify({ success: false, message: "Bad Request" }));
                    return [2 /*return*/];
                }
                // --- CORS headers ---
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
                res.setHeader("Access-Control-Allow-Headers", "Content-Type");
                if (req.method === "OPTIONS") {
                    res.writeHead(204);
                    res.end();
                    return [2 /*return*/];
                }
                if (!(req.method === "POST" && req.url === "/submit-password")) return [3 /*break*/, 7];
                return [4 /*yield*/, getRequestBody(req)];
            case 1:
                body = _a.sent();
                formData = new URLSearchParams(body);
                password = formData.get("password");
                if (!password) {
                    res.writeHead(400, { "Content-Type": "application/json" });
                    res.end(JSON.stringify({ success: false, message: "❌ No password received." }));
                    return [2 /*return*/];
                }
                secret = "my-secret-key";
                hash = createHmac("sha256", secret).update(password).digest("hex");
                console.log("🔒 Password hash:", hash);
                pathToFile = "./data/users.json";
                users = [];
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, fs.promises.readFile(pathToFile, "utf-8")];
            case 3:
                data = _a.sent();
                users = data ? JSON.parse(data) : [];
                return [3 /*break*/, 5];
            case 4:
                err_1 = _a.sent();
                console.log("File not found, will create new one.");
                return [3 /*break*/, 5];
            case 5:
                users.push({ encryptedPassword: hash });
                return [4 /*yield*/, fs.promises.writeFile(pathToFile, JSON.stringify(users, null, 2))];
            case 6:
                _a.sent();
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ success: true, message: "✅ Password received and hashed on the server!" }));
                return [2 /*return*/];
            case 7:
                // --- Ignore favicon ---
                if (req.url === "/favicon.ico") {
                    res.writeHead(204);
                    res.end();
                    return [2 /*return*/];
                }
                return [4 /*yield*/, prepareFile(req.url)];
            case 8:
                file = _a.sent();
                statusCode = file.found ? 200 : 404;
                mimeType = MIME_TYPES[file.ext] || MIME_TYPES.default;
                res.writeHead(statusCode, { "Content-Type": mimeType });
                file.stream.pipe(res);
                console.log("".concat(req.method, " ").concat(req.url, " ").concat(statusCode));
                return [3 /*break*/, 10];
            case 9:
                error_1 = _a.sent();
                console.error("Server error:", error_1);
                res.writeHead(500, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ success: false, message: "Internal Server Error" }));
                return [3 /*break*/, 10];
            case 10: return [2 /*return*/];
        }
    });
}); });
serverHttp.listen(PORT, function () {
    console.log("\uD83D\uDE80 Server running at http://localhost:".concat(PORT));
});
