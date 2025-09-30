// Short circuiting is a way to prevent unnecessary computations
// ? the evaluation of the second operand is skipped if the outcome
// ? can be determined by evaluating the first operand alone.

let age = 22;
const result = age > 18 && "You are legally allowed to drink";
console.log(result);
let new_value = false;
const new_result = new_value && "Truthy Value";
console.log(new_result); // Output: false

// The || operator returns the first truthy operand, or
// the last falsy operand if all operands are falsy.

const name = "";
const displayName = name || "Guest";
console.log(displayName); // Output: Guest

// Application of || are not many
// you can use it to provide default values though (just like in Elixir)
const options = {};
const limit = options.limit || 10;
console.log(limit); // Output: 10 (default value)
