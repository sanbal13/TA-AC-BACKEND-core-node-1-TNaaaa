let {parse} = require('url');

let parsedUrl = parse(`https://airindia.com/fares/calculate?from=delhi&to=detroit`, true);
console.log('Querry:', parsedUrl.query);
console.log('Pathname:', parsedUrl.pathname);
console.log('Protocol:', parsedUrl.protocol);

