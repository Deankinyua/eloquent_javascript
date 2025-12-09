// ? Temporal dead zone
// this variable is said to be in a 'TDZ' as it has not been initialized
// console.log(a);

// a has been declared but it has not been initialized with a value,
// its value becomes 'undefined' because of this
let a;

console.log(a);
a = 5;
console.log(a);

hello(); // Output: "Hello, world!"

// function declarations are hoisted (moved to the top) so you can access
// them before even declaring them
function hello() {
  console.log("Hello, world!");
}

// function expressions behave like regular variables declared with let and const
// hence they are not moved to the top

// helloExpression();
const helloExpression = () => {
  console.log("Hello, world using a function expression!");
};
helloExpression();

// In JavaScript, “hoisting” refers to the process by which variable
// and function declarations are moved to the top of their respective
// scopes during the compilation phase, before the code is actually executed.
