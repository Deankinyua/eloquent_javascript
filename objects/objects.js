let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
};

// adding more properties even though they were not defined
day1.wolf = "became a wolf";

console.log(day1.squirrel);
console.log(day1.wolf);

let journal = [
  {
    events: ["work", "touched tree", "pizza", "running", "television"],
    squirrel: false,
  },
  {
    events: [
      "work",
      "ice cream",
      "cauliflower",
      "lasagna",
      "touched tree",
      "brushed teeth",
    ],
    squirrel: false,
  },
  {
    events: ["weekend", "cycling", "break", "peanuts", "beer"],
    squirrel: true,
  },
];

console.log(journal[0].squirrel);

let object1 = { value: 10 };
let object2 = object1;
object2.value = 10000;

// object2 and object1 point to the same memory location
// console.log(object1);
// console.log(object2);

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
console.log(source);

// * Prevent the original object from being modified using Object.assign
const staff = {
  age: 43,
  Hobbies: ["reading", "Swimming"],
};

const staff2 = Object.assign({}, staff);

staff2.age = 53;
staff2.Hobbies = "Copying other people's work";

// * staff will not be changed
console.log(staff);

console.log(staff2);
