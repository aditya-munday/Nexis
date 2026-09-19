import { createServer } from "node:http";
import next from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dev = process.env.NODE_ENV !== "production";
const port = parseInt(process.env.PORT || "3000", 10);
const hostname = "0.0.0.0";

const app = next({ dev, hostname, port, dir: __dirname });
const handle = app.getRequestHandler();

await app.prepare();

const server = createServer((req, res) => {
  handle(req, res);
});

server.listen(port, hostname, () => {
  console.log(`> Next.js server ready on http://${hostname}:${port}`);
});
