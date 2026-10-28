const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const page = fs.readFileSync(path.join(__dirname, 'public', 'index.html'));

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(page);
}).listen(PORT, () => console.log(`Ping Pixel on port ${PORT}`));
