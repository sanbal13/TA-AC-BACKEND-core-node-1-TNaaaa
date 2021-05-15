let http = require('http');
let fs = require('fs');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
    if(req.method === 'GET' && req.url === '/file') {
          res.setHeader('Content-Type', 'text/html');
          fs.readFile('./node.html', (err, content) => {
               if(err) console.log(err);
               res.write(content);
               res.end();
          })
    } else  if(req.method === 'GET' && req.url === '/stream') {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./node.html').pipe(res);
    }
    
}

server.listen(5555, () => {
    console.log('server listening on port 5555');
})
