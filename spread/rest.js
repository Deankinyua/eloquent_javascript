// * The rest parameter gives us an easier and cleaner way of working with an indefinite number of parameters.
// * Let’s rewrite the above example with a rest parameter:

// We can pass an indefinite number of parameters to our function
// Those parameters are available within our function as an array called args
function mult(...args) {
  return args.reduce((acc, currentValue) => acc * currentValue);
}

let firstMult = mult(4, 3, 9);

console.log(firstMult);
