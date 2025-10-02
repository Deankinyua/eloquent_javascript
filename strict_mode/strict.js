// ? the default mode in which JavaScript code runs is called
// ? the non-strict or 'sloppy' mode

// * Strict mode makes several changes to normal JavaScript semantics:

// Eliminates some JavaScript silent errors by changing them to throw errors.
// Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
// Prohibits some syntax likely to be defined in future versions of ECMAScript.

// "use strict";

let myVariable = "Miau";
// myVriable is not defined and this will throw an error in strict mode
myVriable = "Woof";
console.log(myVriable);

function addNums(num, num) {
  console.log(num + num);
}

addNums(4, 6); // 12

function strictAddNums(num, num) {
  // fails due to use strict
  "use strict";
  console.log(num + num);
}

strictAddNums(1, 7);

// ? The "use strict" directive can only be applied to the body
// ? of functions with simple parameters. Using "use strict"
// ? in functions with rest, default, or destructured parameters is
// ? a syntax error.

function sum(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  //   "use strict";
  return a + b;
}
