console.log("5" - 7);
console.log(5 + "7");
console.log(0 === false);

// Short circuiting and logical operators

console.log(
  true &&
    "Return the RHS expression if the LHS is truthy otherwise return the LHS",
);

console.log(0 && "Zero is falsy");
console.log(true || "Return the LHS if it is truthy otherwise return the RHS");


// Nested Scope
const hummus = function (factor) {
  // Ingredient can see factor, but hummus cannot see amount, unit, name
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
};
// hummus(2);

// This 2 are inherently the same function
const square1 = (x) => {
  return x * x;
};
// when the function body is just one expression
const square2 = (x) => x * x;
// console.log(square1(2));
// console.log(square2(2));

function greet(who) {
  console.log("Hello " + who);
  hummus(2);
}
greet("Harry");
console.log("Bye");
