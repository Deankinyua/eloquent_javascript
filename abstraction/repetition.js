// * functions are just values which we can pass around
// * functions as first-class citizens

// A higher-order function is defined as a function that
// can either take in one or more functions as arguments
// or it can also return a function as its result.

// Higher-order functions allow us to put those blocks
// together to create more powerful functions and cut down
// repetitive programming and logic. examples are Array.map(), Array.forEach() e.t.c
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

// repeat(3, console.log);

// Consider this function that creates another function that permits
// specific actions

const requiredAge = (requiredAge) => {
  return function (age) {
    return age >= requiredAge;
  };
};

// * Here requiredAge is a higher-order function

let canDrinkAlcohol = requiredAge(21);
let canDrive = requiredAge(18);

console.log(canDrive(15));

// a higher order function that returns returns max of numbers
function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}

let noisyFunc = noisy(Math.min);
noisyFunc(3, 2, 1);
