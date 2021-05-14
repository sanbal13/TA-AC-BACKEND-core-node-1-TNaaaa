let os = require('os');
let {readFile, unlink} = require('fs');
console.log('Welcome to Nodejs')


// number of cpu's, free memory, uptime and version

console.log(os.cpus().length);
console.log(os.freemem());
console.log(os.uptime());
console.log(os.version());
