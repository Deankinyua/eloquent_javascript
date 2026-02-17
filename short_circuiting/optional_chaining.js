// * The (?.) operator will short circuit if the object or function called using this operator is undefined or null
// * This is called optional chaining, the expression short circuits returns `undefined` instead of throwing an error

const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

const catName = adventurer?.cat.name;
console.log(catName);
// Expected output: Dinah

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined
