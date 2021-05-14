let buff1 = new Buffer.alloc(12);
let buff2 = new Buffer.allocUnsafe(12);

console.log("buff1",buff1);
console.log("buff2",buff2);

buff1.write("This buffer is created using alloc");
buff2.write("This buffer is created using allocUnsafe");

console.log("After putting data: ");
console.log("buff1",buff1);
console.log("buff2",buff2);

console.log("After converting to string: ");
console.log("buff1",buff1.toString());
console.log("buff2",buff2.toString());


