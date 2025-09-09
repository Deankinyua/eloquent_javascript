const reverse = (array) => {
  let reversedArray = [];
  let lastValueIndex = array.length - 1;

  while (lastValueIndex >= 0) {
    reversedArray.push(array[lastValueIndex]);
    lastValueIndex--;
  }

  return reversedArray;
};

// * A crazy effective function
function reverseInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

array = [4, 6, 1, 5, 8];
console.log(reverse(array));
array_2 = [3, 6, 2, 20];
console.log(reverseInPlace(array_2));
