let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req);
    console.log("####################################");
    console.log(res);
    res.end();
}

server.listen(5000, () => {
    console.log('server listening on port 5000');
});
