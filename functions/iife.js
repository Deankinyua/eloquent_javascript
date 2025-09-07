(function () {
  console.log(
    "This is an immediately invoked function expression with normal syntax",
  );
})();

(() => {
  console.log(
    "This is an immediately invoked function expression with arrow syntax",
  );
})();

// IIFE with variables

((name, age) => {
  console.log(`Hey ${name}, you are ${age} years of age.`);
})("Dean", 22);
