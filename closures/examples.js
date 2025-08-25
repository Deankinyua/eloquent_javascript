// Thinking about closure examples
// let me create a function that fetches a person's password

function password_fetcher(name) {
  let password = "Moses&%&Moses";
  let count = 0;

  return function () {
    count++;
    return `${name} your password is ${password} and you've asked that ${count} times already`;
  };
}

// get_password will still have access to the variables declared in its lexical environment even after
// those outer functions are out of scope
const get_password = password_fetcher("Dean");
console.log(get_password());
console.log(get_password());
console.log(get_password());

// * PS: Stop asking your goddamn password everytime

// * Function factories

function multiplier(factor) {
  return function (number) {
    return number * factor; // Closure remembers `factor`
  };
}
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15

function createButtons() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
}

// createButtons(); // Logs: 0, 1, 2

// So next time you see a function within a function,
// remember: it’s probably carrying a backpack full of variables
// from its outer scope. And that’s what makes closures so special.
