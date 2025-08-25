const padding = (number) => {
  if (Math.floor(number, 100) >= 100) {
    return `${number}`;
  } else if (Math.floor(number, 100) >= 10) {
    return `0${number}`;
  } else {
    return `00${number}`;
  }
};

const animal_print = (cows, chicken) => {
  console.log(`${padding(cows)} cows`);
  console.log(`${padding(chicken)} chicken`);
};

animal_print(400, 80);

// A better way

function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`);
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);

function min(a, b) {
  if (a < b) return a;
  else return b;
}

console.log(min(50, 50));
