let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.statusCode = 202;
    res.end();
}

server.listen(3333, () => {
    console.log('server listening on port 3333');
});