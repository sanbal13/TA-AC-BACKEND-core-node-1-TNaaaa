let http = require('http');

let server = http.createServer(handleRequest);

server.listen(4444, () => {
    console.log('server listening on port 4444');
});

function handleRequest(req, res) {
    console.log(req.method);
    res.writeHead(201, {'Content-Type': 'text/html'});
    res.write('<h1>Welcome</h1>');
    res.end();
}