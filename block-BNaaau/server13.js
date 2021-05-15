let http = require('http');
let fs = require('fs');

let server = http.createServer(handleRequest);
let url = require('url');

function handleRequest(req, res) {
    res.setHeader('Content-type', 'application/json');
    let parsedUrl = url.parse(req.url,true);
    console.log(parsedUrl);
    console.log(parsedUrl.pathname);
    let email = parsedUrl.query;
    console.log(JSON.stringify(email));
    res.end(JSON.stringify(email));

}
server.listen(2345, () => {
    console.log('server listening on port 2345');
});