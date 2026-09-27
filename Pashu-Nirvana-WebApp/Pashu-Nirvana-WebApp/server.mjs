import { createServer } from 'node:http';
import { createReadStream, statSync } from 'node:fs';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml' };
const server = createServer((req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400).end('Bad request'); return; }
  const file = resolve(root, `.${pathname === '/' ? '/index.html' : pathname}`);
  if (file !== root && !file.startsWith(root + sep)) { res.writeHead(403).end('Forbidden'); return; }
  try {
    if (!statSync(file).isFile()) throw new Error('Not a file');
    res.writeHead(200, { 'Content-Type': mime[extname(file)] || 'application/octet-stream', 'X-Content-Type-Options': 'nosniff' });
    createReadStream(file).pipe(res);
  } catch { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Not found'); }
});
const port = Number(process.env.PORT || 4173);
server.listen(port, '127.0.0.1', () => console.log(`Pashu Nirvana is running at http://localhost:${port}`));
