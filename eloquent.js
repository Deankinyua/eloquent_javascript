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
