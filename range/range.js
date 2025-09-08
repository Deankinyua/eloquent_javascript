function range(first_num, second_num) {
  let array = [];
  let holder = first_num;
  while (holder <= second_num) {
    array.push(holder);
    holder++;
  }
  return array;
}

const sum_array = (...numbers) => {
  let sum = 0;

  numbers.forEach((number) => {
    sum += number;
  });

  return sum;
};

let new_array = range(2, 5);
let newer_array = range(0, 15);
console.log(new_array);
console.log(newer_array);

console.log(sum_array(88, 20, 2));
