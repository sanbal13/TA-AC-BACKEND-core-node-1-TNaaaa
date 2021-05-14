let http = require('http');

let server = http.createServer(handleRequest);

server.listen(3000, () => {
    console.log('server is listening on port 3000');
});

function handleRequest(req,res) {
    console.log(req.headers);
    console.log(req.method);
    console.log(req.url);    
}