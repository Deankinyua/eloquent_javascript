// Prototypes are the underlying mechanism through which
// objects inherit features from one another.
const myObject = {
  city: "New York",
  greet() {
    console.log(`Hello from ${this.city}`);
  },
};

let value = Object.getPrototypeOf(myObject);
console.log(value);

// Every object in JavaScript has a built-in property, which is called its prototype.
//  When an object is created, it inherits properties and methods
// from its prototype, and this chain continues until a
// prototype with null is reached.

// When you try to access a property of an object:
// if the property can’t be found in the object itself,
// the prototype is searched for the property. If the property
// still can’t be found, then the prototype’s prototype is
// searched, and so on until either the property is found,
// or the end of the chain is reached, in which case
// undefined is returned.

// Object.prototype is the last prototype in the prototype chain
console.log(Object.getPrototypeOf(Object.prototype));
// → null

const personPrototype = {
  greet() {
    console.log(`Hello there ${this.name}`);
  },
};
// Creating a new object with personPrototype as its prototype
const carl = Object.create(personPrototype);
carl.name = "Dean Kinyua";
// the greet method is automatically inherited from the prototype
carl.greet();
