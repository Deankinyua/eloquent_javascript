// functions with the function keyword
const square = function (x) {
  return x * x;
};
console.log(square(4));

// Arrow functions
const square_arrow = (x) => {
  return x * x;
};
console.log(square_arrow(4));

// A return keyword without an expression after it will cause the function to return undefined.
const no_way = (number) => {
  console.log(number * number);
  return;
};
console.log(no_way(5));

// a function with no return statement simply returns
const return_undefined = () => {
  "";
};
console.log(return_undefined());

const roundTo = function (n, step) {
  let remainder = n % step;
  let y = n - remainder;
  return y + (remainder > step / 2 ? 0 : step);
};
console.log(roundTo(23, 10));
