// ? I will shorten this later ... too verbose

const range = (first_num, second_num, step = 1) => {
  let array = [];
  let holder = first_num;

  if (first_num < second_num) {
    while (holder <= second_num) {
      array.push(holder);
      holder += step;
    }
  } else {
    while (holder >= second_num) {
      array.push(holder);
      holder += step;
    }
  }

  return array;
};

const sum_array = (...numbers) => {
  let sum = 0;

  numbers.forEach((number) => {
    sum += number;
  });

  return sum;
};

let new_array = range(2, 5);
let newer_array = range(10, 5, -1);
let newest_array = range(-3, -15, -2);

console.log(new_array);
console.log(newer_array);
console.log(newest_array);
console.log(sum_array(88, 20, 2));
