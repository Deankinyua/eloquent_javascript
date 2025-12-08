// 'Initialization' is something that happens 'behind the scenes'
// or 'under the hood', so to speak. At runtime, all declared variables
// are initialized with a beginning assignment of 'undefined'
// (even if they immediately get assigned a different value in
// the first line of code).

// Thus, initialization isn't a term that matters to us. We declare and assign,
// and the Javascript engine initializes.

// variable has been declared and JavaScript runtime immediately 'initializes' it to undefined
let a;
console.log(`value at declaration: ${a}`);
// we assign it with 7
a = 7;
console.log(`value at assignment: ${a}`);

// Declares a variable, which also gets assigned a value of 'undefined'
// during initialization, but when that line of code is
// actually reached during execution, it gets re-assigned to the integer "10".

let b = 10;

console.log(`value at declaration + assignment: ${b}`);
