let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.setHeader('Content-Type', 'text/json');
    
    res.end(JSON.stringify(req.headers));
}

server.listen(7000, () => {
    console.log('server listening on port 7000');
});