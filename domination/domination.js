let x = 0;

for (let i = 0; i < 10; i++) {
  if (i < 5) {
    x = x + 1;
  }

  x = x * 2;
  // line number 8 dominates line number 10 as every path to line 10 must pass through 8
  console.log(`At this point x is ${x}`);
}

console.log(x);
