import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname } from 'node:path';

const server = createServer(async (req, res) => {
  // Serve default index.html for "/"
  let filePath;

  if(req.url === '/') {
    filePath = 'Calculator.html';
  }
  else if(req.url === '/Hello') {
    res.end('Running from: ' + process.cwd() + '\n');
    return
  }
  else {
    filePath = req.url.slice(1);
  }
  // Set correct Content-Type
  const ext = extname(filePath);

  let contentType = 'text/plain';

  switch(ext) {
    case '.html': contentType = 'text/html';
    break;
    case '.css': contentType = 'text/css';
    break;
    case '.js': contentType = 'application/javascript';
    break;
    case '.png': contentType = 'image/png';
    break;
  }

  try {
    const data = await readFile(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  } 
  catch (err) {
    if (err.code === 'ENOENT') {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    } 
    else {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 Internal Server Error');
    }
  }

  });

const PORT = 3000;
server.listen(PORT, '0.0.0.0')
console.log(`Server running at http://10.0.1.8:${PORT}/`);
