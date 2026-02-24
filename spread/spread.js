// * The spread operator “spreads” the values in an iterable (arrays, strings) across
// * zero or more arguments or elements.

const mySum = (num_1, num_2, num_3) => num_1 + num_2 + num_3;
let numbers = [1, 2, 3];

console.log(mySum(...numbers));
