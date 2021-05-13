let fs = require(`fs`);

fs.readFile('./content.md','utf-8', (err, content) => {
    console.log(content);
    setTimeout(() => {
        console.log('Inside Timeout');
    }, 2000);
    
    console.log('Code Ends');
})

let buff1 = new Buffer.alloc(10);
console.log(buff1);
buff1.write('Welcome to Buffer');


