// Flatten an array of arrays using reduce and concat

let arrays = [[1, 2, 3], [4, 5], [6]];
let flattenedArray = arrays.reduce((acc, currentArray) =>
  // array.concat(array1) merges 2 arrays
  acc.concat(currentArray),
);
console.log(flattenedArray);

// Write a function that behaves like a for loop

const forLoop = (initialValue, testFunction, updateFunction, bodyFunction) => {
  for (
    let value = initialValue;
    testFunction(value);
    value = updateFunction(value)
  ) {
    bodyFunction(value);
  }
};

// forLoop(
//   1,
//   (n) => n < 10,
//   (n) => n + 1,
//   console.log,
// );

// Write a function that returns true if the expression is true for all elements in the array
let numbers = [1, 30, 5];

function every(array, test) {
  for (let element of array) {
    if (!test(element)) return false;
  }
  return true;
}

// console.log(every(numbers, (n) => n < 10));

const even = (element) => element % 2 === 0;
// const array = [1, 2, 3, 4, 5];
// console.log(array.some(even));

function every2(array, predicate) {
  // the logical NOT (!) flips true to false and viceversa
  return !array.some((element) => !predicate(element));
}

// Element = 1
// predicate(1) → 1 < 10 → true
// - !predicate(1) → false
// .some keeps going.

// Element = 30
// predicate(30) → 30 < 10 → false
// - !predicate(30) → true
// .some stops and returns true
// outer negation flips true to false

let test = (n) => n < 10;

console.log(every2(numbers, test));
