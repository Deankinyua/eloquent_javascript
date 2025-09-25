// ? The iterator interface
// Every iterable object must have the a method with Symbol.iterator method
// to work with for ... of loops

let nameIterator = "name"[Symbol.iterator]();

console.log(nameIterator.next());
console.log(nameIterator.next());
console.log(nameIterator.next());
console.log(nameIterator.next());
console.log(nameIterator.next());

// You can now see the advantages of using Symbols
// We can add the same behaviour to different objects without
// it conflicting with the other properties of that specific object be it a
// an array, string and so on 
let arrayIterator = ["stop", "using", "women"][Symbol.iterator]();

console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
