// ? you can either import it as an object or just immediately destructure it
// const {getFullName, add} = require("./foo")
const foo = require("./foo");

console.log(foo.getFullName("Ambrose", "Mogaka"));
console.log(foo.add(100, 300));

// console.log(getFullName("Ambrose", "Mogaka"));
// console.log(add(100, 300));
