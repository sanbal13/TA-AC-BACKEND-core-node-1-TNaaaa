console.log('Welcome to Nodejs')

let os = require('os');
// number of cpu's, free memory, uptime and version

console.log(os.cpus().length);
console.log(os.freemem());
console.log(os.uptime());
console.log(os.version());
