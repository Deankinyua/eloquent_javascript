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
      [1192, 11708],
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
      [1005, 1008],
      [11392, 12508],
      [11213, 11520],
    ],
    direction: "rtl",
    year: 20,
    living: true,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet",
  },

  {
    name: "Latin",
    ranges: [
      [994, 1028],
      [11310, 11808],
      [11813, 21520],
    ],
    direction: "rtl",
    year: -100,
    living: false,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet",
  },
];

// Array.reduce takes a callback function with the accumulator as first arg:
// (acc, currentValue) => {}

// checks the ranges array, starts with first element and subtracts to from from
// to get the number of characters in each range and then proceeds to reduce all of them
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

// Finding the average year of origin for dead and living scripts
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(
  Math.round(average(scriptDataset.filter((s) => s.living).map((s) => s.year))),
);
console.log(
  Math.round(
    average(scriptDataset.filter((s) => !s.living).map((s) => s.year)),
  ),
);

function countCharacters(array) {
  array.map((script) => (script.characterCount = characterCount(script)));
  return array;
}

console.log(countCharacters(scriptDataset));
