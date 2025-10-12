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
