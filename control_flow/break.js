// break statements are used to exit a loop prematurely
// terminate early with break statements
// when this loop encounters 5, just exit; we've found what we want

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("Breaking the loop at: ", i);
    // when this condition is satisfied exit the loop
    break;
  }
  console.log(`Now at ${i}`);
}

const nameArray = [
  "Joan",
  "Rose",
  "Ziporrah",
  "Veronica",
  "Mercy",
  "Eve",
  "Monica",
];
// Let's say we are looking for a specific value from an array:
for (let i = 0; i < 7; i++) {
  if (nameArray[i] === "Mercy") {
    console.log(`We found Mercy at index ${i} exiting ...`);
    break;
  }
  console.log(`This is ${nameArray[i]} not Mercy`);
}
