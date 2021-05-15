let http = require('http');
let url = require('url');

let server = http.createServer(handleRequest);

server.listen(5000, () => {
    console.log('server listening on port 5000');
})

function handleRequest(req,res) {    
    console.log(req.method, req.url);
    let parsedUrl = url.parse(req.url);
    if(req.method === 'GET' && parsedUrl.pathname ==='/') {
         res.write('Welcome to homepage');
         res.end();
    } else if(req.method === 'GET' && parsedUrl.pathname ==='/about') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h2>This is all about NodeJS</h2>');
        res.end();
   } else if(req.method === 'POST' && parsedUrl.pathname ==='/about') {
    res.setHeader('Content-Type', 'text/json');
    res.write(`{message: this is a post request}`);
    res.end();
} else {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h2>Page not found</h2>`);
    res.end();
}
}