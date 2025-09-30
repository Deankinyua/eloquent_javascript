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

// Iterable Linked list

class ListIterator {
  constructor(list) {
    this.list = list;
  }

  next() {
    if (this.list == null) {
      return { done: true };
    }
    let value = this.list.value;
    this.list = this.list.rest;
    return { value, done: false };
  }
}

class List {
  constructor(value, rest) {
    // the value stored at this node
    this.value = value;
    // Pointer to the next node (another list or null)
    this.rest = rest;
  }

  get length() {
    return 1 + (this.rest ? this.rest.length : 0);
  }

  static fromArray(array) {
    let result = null;
    // Looping from the end of the array, rather than the start
    for (let i = array.length - 1; i >= 0; i--) {
      // this, in a static method, points at the constructor
      // of the class, not an instance
      result = new this(array[i], result);
    }
    return result;
  }
}

List.prototype[Symbol.iterator] = function () {
  return new ListIterator(this);
};

let list = List.fromArray([1, 2, 3]);
console.log(list);
for (let element of list) {
  console.log(element);
}

// extending the List class
class LengthList extends List {
  #length;

  constructor(value, rest) {
    super(value, rest);
    // When a LengthList node is created, it calls the parent’s length getter (super.length), which computes the recursive length.
    // That length is stored in #length.
    // Later, calling .length on a LengthList just returns the cached value, instead of recalculating recursively.
    this.#length = super.length;
  }

  get length() {
    return this.#length;
  }
}

// * instanceof method to check if a class was derived from another
console.log(new LengthList(1, null) instanceof LengthList);
console.log(new LengthList(2, null) instanceof List);

console.log(LengthList.fromArray([1, 2, 3, 4, 5]).length);
