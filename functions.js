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

const roundTo = function (n, step) {
  let remainder = n % step;
  let y = n - remainder;
  return y + (remainder > step / 2 ? 0 : step);
};

console.log(roundTo(23, 10));
