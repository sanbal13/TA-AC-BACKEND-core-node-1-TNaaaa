var {readFile, readFileSync} = require('fs');

readFile('./content.md', 'utf8', (err, content) => {
 console.log(content);
});

var result = readFileSync('./content.md', 'utf8');
console.log(result, 'sync');

let buff1 = Buffer.alloc(10);
buff1.write('Welcome to Buffer');
console.log(buff1);
