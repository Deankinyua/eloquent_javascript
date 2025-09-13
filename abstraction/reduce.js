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

const array = [1, 2, 3, 4];
// * In the inbuilt reduce you don't have to pass the accumulator
// * Format => array.reduce((acc, currentValue) => {})
console.log(array.reduce((a, b) => a + b));

const scriptDataset = [
  {
    name: "Coptic",
    ranges: [
      [994, 1008],
      [11392, 11508],
      [11513, 11520],
    ],
    direction: "ltr",
    year: -200,
    living: true,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet",
  },

  {
    name: "Mongolian",
    ranges: [
      [994, 1008],
      [11392, 11508],
      [11513, 11520],
    ],
    direction: "rtl",
    year: 20,
    living: true,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet",
  },

  {
    name: "Latin",
    ranges: [
      [994, 1008],
      [11392, 11508],
      [11513, 11520],
    ],
    direction: "rtl",
    year: -100,
    living: false,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet",
  },
];

// Array.reduce takes a callback function with the accumulator as first arg:
// (acc, currentValue) => {}
function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

// The below function will go through all the scripts and return the one
// which has the highest characterCount

console.log(
  scriptDataset.reduce((acc, b) => {
    // b is the current value. In the first iteration that will be the script Mongolian
    return characterCount(acc) < characterCount(b) ? b : acc;
  }),
);

// Ternary operators in JavaScript
// ? condition ? expressionIfTrue : expressionIfFalse
// characterCount(acc) < characterCount(b) ? b : acc
// Don't confuse ternary operators with Short Circuiting :
let value = "yes";
const result = value && "Truthy Value";
console.log(result); // Output: Truthy Value
let new_value = 0;
const new_result = new_value && "Truthy Value";
console.log(new_result); // Output: 0
