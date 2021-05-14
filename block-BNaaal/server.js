let http = require('http');

let server = http.createServer(handleRequest);

server.listen(4000  , () => {
    console.log('server listening on port 4000');
});

function handleRequest(req, res) {
    res.end('Welcome');
}