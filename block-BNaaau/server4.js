let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req.url, req.method);
    res.write(req.url);
    res.write(req.method);
    res.end();
}

server.listen(5566, () => {
    console.log('server listening on port 5566');
});