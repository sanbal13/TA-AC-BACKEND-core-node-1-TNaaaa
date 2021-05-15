let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
    if(req.method === 'GET' && req.url ==='/'){
        res.setHeader('Content-Type', 'text/plain')
        res.end('Santosh');
    }
    if(req.method === 'GET' && req.url ==='/about'){
        res.setHeader('Content-Type', 'text/html')
        res.end('<h2>Santosh</h2>');
    } else {
        res.statusCode = 404;
        res.end();
    }

}
server.listen(2345, () => {
    console.log('server listening on port 2345');
});