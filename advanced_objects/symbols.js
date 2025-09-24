let sym = Symbol("name");
console.log(sym);
// You cannot create the same symbol twice, more like atoms in Elixir
console.log(sym == Symbol("name"));
// → false

// Symbols can live freely alongside other properties
const length = Symbol("length");
Array.prototype[length] = 0;

console.log([1, 2].length);
// → 2
console.log([1, 2][length]);
// → 0

const ageSymbol = Symbol();
const surNameSymbol = Symbol("surname");

const person = {
  name: "John",
  [ageSymbol]: 24,
};

person[surNameSymbol] = "Doe";

console.log(person.name);
console.log(person[ageSymbol]);
console.log(person.ageSymbol);

// Symbols don't make the data truly private, just harder to access
const personSymbols = Object.getOwnPropertySymbols(person);
personSymbols.forEach((sym) => console.log(person[sym]));
