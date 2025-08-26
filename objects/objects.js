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
console.log(object1);
console.log(object2);
