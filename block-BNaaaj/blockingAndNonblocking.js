// Blocking Code
console.log("Blocking Code: ");
console.log("Code Starts");
console.time('Loop');
for(let i = 0; i < 1000000000; i++) {
    // do something
}
console.log("Code Ends");

// Non Blocking Code 
console.log("Non-blocking Code: ");
console.log("Code Starts");
console.time('setTimeout');
setTimeout(()=>{
    console.log('Non-blocking Code');
}, 5000);
console.log("Code Ends");
