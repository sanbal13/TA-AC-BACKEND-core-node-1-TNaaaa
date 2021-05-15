let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.write('My first server in NodeJS');
    res.end();
}

server.listen(5100, () => {
    console.log('server listening on port 5100');
});
