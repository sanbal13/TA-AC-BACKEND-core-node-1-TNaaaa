let http = require('http');
let fs = require('fs');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
    if(req.method === 'GET' && req.url ==='/users'){
        res.setHeader('Content-Type', 'text/html')
        fs.readFile('./form.html', (err, content) => {
                if(err) console.log(err);
                res.end(content);
        });
       
    }else if(req.method === 'POST' && req.url ==='/users'){
        res.setHeader('Content-Type', 'text/html')
        res.end('<h2>Posted for second time</h2>');
    } else {
        res.write("There is a error");
        res.statusCode = 404;
        res.end();
    }

}
server.listen(2345, () => {
    console.log('server listening on port 2345');
});