// Control structures

let theNumber = 5;
if (theNumber > 6) {
  console.log("Your number is the square root of " + theNumber * theNumber);
}

// let number = 0;
// while (number <= 12) {
//   console.log(number);
//   number += 2;
// }

// for (let number = 1; number <= 100; number++) {
//   if (number % 5 === 0 && number % 3 === 0) {
//     console.log("FizzBuzz");
//   } else if (number % 5 === 0) {
//     console.log("Fizz");
//   } else if (number % 3 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(number);
//   }
// }

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
