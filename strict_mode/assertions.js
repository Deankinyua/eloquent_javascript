function firstElement(array) {
  if (typeof array == "object" && array.length == 0) {
    throw new Error("firstElement called with []");
  }
  return array[0];
}
// both arrays and strings have length property and can be accessed with variable[index]
let string = "hallo";
let array = [4, 9, 20, 40];
let emptyArray = [];

console.log(firstElement(string));
console.log(firstElement(emptyArray));
console.log(firstElement(array));
