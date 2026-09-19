import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const PUBLIC_DIR = path.join(__dirname, "public");
const PAGES_DIR = path.join(__dirname, "scraped_pages");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8"
};

const ROUTE_PAGE_MAP = {
  "/": "index.html",
  "/index": "index.html",
  "/index.html": "index.html",
  "/blog": "blog.html",
  "/blog/": "blog.html",
  "/benchmarks": "benchmarks.html",
  "/benchmarks/": "benchmarks.html",
  "/benchmarks/leaderboard": "leaderboard.html",
  "/benchmarks/leaderboard/": "leaderboard.html",
  "/docs": "docs.html",
  "/docs/": "docs.html",
  "/docs/api": "docs.html",
  "/about": "about.html",
  "/about/": "about.html",
  "/app": "app.html",
  "/app/": "app.html"
};

const server = http.createServer((req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host || `localhost:${port}`}`);
  let pathname = decodeURIComponent(reqUrl.pathname);
  const isHead = req.method === "HEAD";

  if (ROUTE_PAGE_MAP[pathname]) {
    const filePath = path.join(PAGES_DIR, ROUTE_PAGE_MAP[pathname]);
    if (fs.existsSync(filePath)) {
      return serveFile(req, res, filePath);
    }
  }

  if (pathname === "/_next/image") {
    const targetUrl = reqUrl.searchParams.get("url");
    if (targetUrl) {
      const cleanTarget = decodeURIComponent(targetUrl).replace(/^\//, "");
      const fullPath = path.join(PUBLIC_DIR, cleanTarget);
      if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
        return serveFile(req, res, fullPath);
      }
    }
  }

  const filename = path.basename(pathname).replace(/\\/g, "");
  if (pathname.startsWith("/_next/static/chunks/")) {
    const altPath = path.join(PUBLIC_DIR, "static", "chunks", filename);
    if (fs.existsSync(altPath) && fs.statSync(altPath).isFile()) {
      return serveFile(req, res, altPath);
    }
  }

  if (pathname.startsWith("/_next/static/media/")) {
    const altPath = path.join(PUBLIC_DIR, "static", "media", filename);
    if (fs.existsSync(altPath) && fs.statSync(altPath).isFile()) {
      return serveFile(req, res, altPath);
    }
  }

  const cleanPath = pathname.replace(/^\//, "").replace(/\\/g, "");
  const directPath = path.join(PUBLIC_DIR, cleanPath);

  if (fs.existsSync(directPath) && fs.statSync(directPath).isFile()) {
    return serveFile(req, res, directPath);
  }

  res.writeHead(404, { "Content-Type": "text/plain", "Connection": "close" });
  res.end(`Not found: ${pathname}`);
});

function serveFile(req, res, filePath) {
  const isHead = req.method === "HEAD";
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || (filePath.includes("embeds") ? "application/json" : "application/octet-stream");
  const stat = fs.statSync(filePath);

  res.writeHead(200, {
    "Content-Type": contentType,
    "Content-Length": stat.size,
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": ext === ".html" ? "no-cache, no-store, must-revalidate" : "public, max-age=31536000, immutable",
    "Connection": "close"
  });

  if (isHead) {
    res.end();
  } else {
    fs.createReadStream(filePath).pipe(res);
  }
}

function startServer(targetPort) {
  server.listen(targetPort, () => {
    console.log(`\n> Nexis local server ready:`);
    console.log(`  - Local:   http://localhost:${targetPort}`);
    console.log(`  - IPv4:    http://127.0.0.1:${targetPort}\n`);
  });
}

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.warn(`Port ${port} in use, trying port ${port + 1}...`);
    port += 1;
    startServer(port);
  } else {
    console.error("Server error:", err);
  }
});

startServer(port);
