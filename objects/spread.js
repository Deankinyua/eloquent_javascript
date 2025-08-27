// * Clone the source object using the spread operator
const staff = {
  age: 43,
  Hobbies: ["reading", "Swimming"],
};

const staff2 = { ...staff };
staff2.age = 53;

console.log(staff);
console.log(staff2);
