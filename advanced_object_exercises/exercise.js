// * The vector type

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vec) {
    let x = vec.x + this.x;
    let y = vec.y + this.y;

    return new Vec(x, y);
  }

  minus(vec) {
    let x = this.x - vec.x;
    let y = this.y - vec.y;

    return new Vec(x, y);
  }

  length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

const vec = new Vec(9, 10);
const newVec = new Vec(11, 10);
const thirdVec = new Vec(3, 4);

console.log(vec.plus(newVec));
console.log(vec.minus(newVec));
console.log(thirdVec.length());
console.log(new Vec(9, 12).length());

console.log(NaN !== NaN);

// * The Group type which should behave like a set

const newSet = new Set([1, 2, 4]);
newSet.add(8);
console.log(newSet);
// console.log(newSet.has(8));

class Group {
  #members = [];

  add(value) {
    if (!this.has(value)) {
      this.#members.push(value);
    }
  }

  delete(value) {
    this.#members = this.#members.filter((v) => v !== value);
  }

  has(value) {
    return this.#members.includes(value);
  }

  static from(collection) {
    let group = new Group();
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }

  // Making a Group iterable
  // Every group iterator must impelement the [Symbol.iterator]() method

  [Symbol.iterator]() {
    // Every iterator method must have a next method that returns an object containing a value and a done property
    return new GroupIterator(this.#members);
  }
}

class GroupIterator {
  #members;
  #position;

  constructor(members) {
    this.#members = members;
    this.#position = 0;
  }

  next() {
    // checks if we are at the last element
    if (this.#position >= this.#members.length) {
      return { done: true };
    } else {
      // value is the element at the given index
      let result = { value: this.#members[this.#position], done: false };
      this.#position++;
      return result;
    }
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add("10");
group.delete(10);
console.log(group.has(10));

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
