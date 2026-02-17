// * The (?.) operator will short circuit if the object or function called using this operator is undefined or null
// * This is called optional chaining, the expression short circuits returns `undefined` instead of throwing an error

const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

// Here the (?.) operator will check if dog is undefined. If it is then there is no need of
// looking into the name property just return `undefined`
const dogName = adventurer.dog?.name;
console.log(dogName);

// This will immediately raise an error as the property `dog` is undefined
// console.log(adventurer.dog.age);
// Expected output: Program crashes

const catName = adventurer.cat?.name;
console.log(catName);
// Expected output: Dinah

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined
