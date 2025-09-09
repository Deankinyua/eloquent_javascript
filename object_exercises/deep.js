function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false;

  let keysA = Object.keys(a),
    keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

const reverse = (array) => {
  // we will be swapping elements from each end until we reach the middle of the array

  let midPoint = Math.floor(array.length / 2);

  for (i = 0; i < midPoint; i++) {
    // take the lhs element
    let lhsElement = array[i];
    // take equivalent the rhs value and set it to the lhs
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = lhsElement;
  }
  return array;
};

let person = { age: 22, name: "Dean Kinyua" };
let person_2 = { age: 22, name: "Dean Kinyua" };

let array = [1, 4, 5, 6, 10];
console.log(reverse(array));
console.log(array);

console.log(deepEqual(person, person_2));
