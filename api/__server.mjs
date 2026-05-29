import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let ssrModulePromise;
async function getSsrModule() {
  if (!ssrModulePromise) {
    // Resolve the built SSR entry produced by the Nitro/Vite build in node_modules
    const ssrPath = path.join(__dirname, '..', 'node_modules', '.nitro', 'vite', 'services', 'ssr', 'index.js');
    ssrModulePromise = import(ssrPath).then((m) => m.default ?? m);
  }
  return ssrModulePromise;
}

export default async function handler(req, res) {
  try {
    const ssr = await getSsrModule();

    // Build a Request object from the Node req
    const url = new URL(req.url, `http://${req.headers.host}`);
    const headers = new Headers();
    for (const [k, v] of Object.entries(req.headers)) {
      if (Array.isArray(v)) headers.set(k, v.join(','));
      else if (v != null) headers.set(k, String(v));
    }

    const body = [];
    for await (const chunk of req) body.push(chunk);
    const request = new Request(url.toString(), {
      method: req.method,
      headers,
      body: body.length ? Buffer.concat(body) : undefined,
    });

    const response = await ssr.fetch(request, {}, { waitUntil: (p) => p });

    // pipe status, headers and body back to Vercel response
    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      if (key.toLowerCase() === 'transfer-encoding') return;
      res.setHeader(key, value);
    });

    const arrayBuffer = await response.arrayBuffer();
    res.end(Buffer.from(arrayBuffer));
  } catch (err) {
    console.error('SSR proxy error:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}
