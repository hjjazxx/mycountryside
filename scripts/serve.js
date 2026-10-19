const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const port = Number(process.env.PORT) || 8124; // 端口被占用时可指定：PORT=8125 node scripts/serve.js
const ROOT = path.resolve(__dirname, '..'); // 站点根目录（本脚本位于 scripts/ 下）

const mime = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.svg': 'image/svg+xml',
  '.webp': 'image/webp', '.ico': 'image/x-icon',
  '.mp4': 'video/mp4', '.m4v': 'video/mp4', '.webm': 'video/webm',
  '.ogv': 'video/ogg', '.mov': 'video/quicktime'
};

http.createServer((req, res) => {
  const u = decodeURIComponent(req.url.split('?')[0]);
  let p = path.join(ROOT, u === '/' ? 'index.html' : u);
  if (fs.existsSync(p) && fs.statSync(p).isDirectory()) p = path.join(p, 'index.html');
  const ext = path.extname(p).toLowerCase();
  // 支持 Range 请求：视频拖动进度条、iOS/Safari 播放都依赖它
  fs.stat(p, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404); res.end('Not found'); return; }
    const base = {
      'Content-Type': mime[ext] || 'application/octet-stream',
      'Accept-Ranges': 'bytes',
      'Access-Control-Allow-Origin': '*'
    };
    const m = /bytes=(\d*)-(\d*)/.exec(req.headers.range || '');
    if (m) {
      const start = m[1] ? parseInt(m[1], 10) : 0;
      const end = m[2] ? parseInt(m[2], 10) : st.size - 1;
      if (start < st.size && end >= start) {
        const hi = Math.min(end, st.size - 1);
        res.writeHead(206, Object.assign({}, base, {
          'Content-Range': `bytes ${start}-${hi}/${st.size}`,
          'Content-Length': hi - start + 1
        }));
        fs.createReadStream(p, { start, end: hi }).pipe(res);
        return;
      }
      res.writeHead(416, Object.assign({}, base, { 'Content-Range': `bytes */${st.size}` }));
      res.end();
      return;
    }
    res.writeHead(200, Object.assign({}, base, { 'Content-Length': st.size }));
    fs.createReadStream(p).pipe(res);
  });
}).listen(port, '0.0.0.0', () => {
  console.log(`\n本地访问：   http://127.0.0.1:${port}/index.html`);
  const nets = os.networkInterfaces();
  Object.values(nets).forEach(list => {
    (list || []).forEach(ni => {
      if (ni.family === 'IPv4' && !ni.internal) {
        console.log(`手机访问：   http://${ni.address}:${port}/index.html`);
      }
    });
  });
  console.log('');
});
