let http = require('http');
let fs = require('fs');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  if (req.url === '/' || req.url === '/index.html') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./Buson/index.html').pipe(res);
  } else if (req.url === '/about.html') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./Buson/about.html').pipe(res);
  } else if (req.url === '/blog.html') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./Buson/blog.html').pipe(res);
  } else if (req.url === '/cases.html') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./Buson/cases.html').pipe(res);
  } else if (req.url === '/contact.html') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./Buson/contact.html').pipe(res);
  } else if (req.url === '/services.html') {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./Buson/services.html').pipe(res);
  } else if (req.url.split('.').pop() === 'css') {
    res.setHeader('Content-Type', 'text/css');
    fs.readFile('./Buson' + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  } else if (
    req.url.split('.').pop() === 'png' ||
    req.url.split('.').pop() === 'jpg') {
    res.setHeader('Content-Type', 'text/image');
    fs.readFile('./Buson' + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  } else {
    res.setCode = 404;
    res.end('Page not found');
  }
}

server.listen(3000, () => {
  console.log('server listening on port 3000');
});
