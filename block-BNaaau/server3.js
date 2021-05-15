let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req.headers);
    let property = 'user-agent';
    res.end(req.headers[property]);
}

server.listen(5555, () => {
    console.log('server listening on port 5555');
});