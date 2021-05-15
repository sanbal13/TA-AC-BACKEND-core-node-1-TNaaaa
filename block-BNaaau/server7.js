let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.setHeader('Content-type', 'text/html');
    res.end(`<h3>Welcome to altcampus</h3>`);
}

server.listen(8000, () => {
    console.log('server listening on port 8000');
});