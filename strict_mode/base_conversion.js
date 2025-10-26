function convertToBase(number, base = 2) {
  let string = "";
  let negative = number > 0 ? false : true;
  number = Math.abs(number);

  while (number > 0) {
    let quotient = Math.floor(number / base);
    let remainder = number % base;

    string = remainder + string;
    number = quotient;
    if (quotient < base) {
      string = quotient + string;
      break;
    }
  }

  return negative ? "-" + string : string;
}

console.log(convertToBase(40, 8));
console.log(convertToBase(-16, 8));
console.log(convertToBase(18, 8));
console.log(convertToBase(8));
