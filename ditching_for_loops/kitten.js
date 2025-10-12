// Maybe we should abandon for loops for a more functional approach using map and filter
const cats = [
  { name: "Mojo", months: 84 },
  { name: "Mao-Mao", months: 34 },
  { name: "Waffles", months: 4 },
  { name: "Pickles", months: 6 },
];

const isKitten = (cat) => cat.months < 7;
const getName = (cat) => cat.name;
const getKittenNames = (cats) => cats.filter(isKitten).map(getName);
const kittens = getKittenNames(cats);

console.log(kittens);
console.log(cats);
