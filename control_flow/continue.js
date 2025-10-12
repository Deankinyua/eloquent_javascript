// Let's say you want to print only odd numbers
// You don't really want to exit when you encounter an even number
// rather you would want to skip it and test the next number
// you can achieve this with continue

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log("Skipping the even number: ", i);
    // when this condition is satisfied skip this iteration and go to the next
    continue;
  }
  console.log(`Odd number: ${i}`);
}

// break and continue can be used with any kind of loop
let i = 0;
while (i < 10) {
  i++;
  if (i % 3 === 0) {
    continue; // Skips multiples of 3
  }
  console.log(i);
}
