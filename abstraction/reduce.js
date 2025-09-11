// * Reduce is the same pattern in Elxir's (Enum.reduce(enumerable, acc, fun)

function get_total(array, acc, fun) {
  for (number of array) {
    acc = fun(acc, number);
  }
  return acc;
}

let numbers = [1, 2, 3];
let sum = get_total(numbers, 0, (acc, number) => acc + number);

console.log(sum);

// * In the inbuilt reduce you don't have to pass the accumulator
console.log([1, 2, 3, 4].reduce((a, b) => a + b));

