// ? The iterator interface
// Every iterable object must have the a method with Symbol.iterator method
// to work with for ... of loops

let nameIterator = "name"[Symbol.iterator]();

console.log(nameIterator.next());
console.log(nameIterator.next());
console.log(nameIterator.next());
console.log(nameIterator.next());
console.log(nameIterator.next());
