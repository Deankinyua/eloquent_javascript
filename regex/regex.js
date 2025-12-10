// only use this when you know the pattern will be changing
let re1 = new RegExp("abc");

// otherwise use this
let re2 = /abc/;

// The backslash \ is the escape character
// Match the literal + sign
let aPlus = /A\+/;

let regex = /[0-9]{10}/;
let regex2 = /[\w]{10}/;

// regex.test returns a boolean telling you whether the string contains a match of the pattern in the expression
// console.log(regex.test("0700444299"));
// console.log(regex2.test("djkf9292kjek"));

console.log(/'\d+'/.test("'123'"));
// → true
console.log(/'\d+'/.test("''"));
// → false
console.log(/'\d*'/.test("'123'"));
// → true
console.log(/'\d*'/.test("''"));
// → true

// the ? makes the preceding character optional e.g u is optional
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
// → true
console.log(neighbor.test("neighbor"));
// → true

let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("1-30-2003 8:45"));

// A part of a regex enclosed in parentheses counts as a single element
// as far as the operators following it are concerned
let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));
