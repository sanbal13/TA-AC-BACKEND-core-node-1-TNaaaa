let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({'success': true, 'message': 'Welcome to Nodejs'}));
}

server.listen(8888, () => {
    console.log('server listening on port 8888');
});