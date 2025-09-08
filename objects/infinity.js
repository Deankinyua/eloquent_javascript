// * the REST parameters collects all additional arguments into an array

function max(name, ...numbers) {
  console.log(numbers);

  // * -Infinity is the smallest number in JavaScript
  let result = -Infinity;

  numbers.forEach((number) => {
    if (number > result) result = number;
  });

  return `${name} the maximum of the numbers is ${result}`;
}
console.log(max("Dean", 40, 10, 19, -2));

let words = ["never", "fully", "describe"];
console.log("Words", "will", ...words, "how much you meant to me.");

let vehicle = {
  windscreen: 1,
  tires: 4,
  steering: 1,
};

// * this spread operator is also used to collect object properties
let lorry = { ...vehicle, tires: 6 };
console.log(vehicle);
console.log(lorry);
