// a fucked up way of creating a function
// Both ways work - JavaScript's liberal nature

const sum = new Function("a", "b = 42", "return a + b");
const sum2 = Function("a", "b = 42", "return a + b");

console.log(sum(8));
console.log(sum2(8, 8));
