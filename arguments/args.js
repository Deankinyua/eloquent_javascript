// if you do not pass an argument, its value becomes 'undefined'
function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(minus(10));
console.log(minus(10, 5));

// the same way we pass optional arguments to Elixir, you can do this with step = 1
function roundTo(n, step = 1) {
  let remainder = n % step;
  let y = n - remainder;
  return y + (remainder < step / 2 ? 0 : step);
}
// console.log(roundTo(4.5));

// console.log(roundTo(4.5, 2));

const greet_someone = (default_name = "John") => {
  return `Hello ${default_name}`;
};

const sum_numbers = (num_1, num_2) => num_1 + num_2;

console.log(sum_numbers(4, 7, 2003));
