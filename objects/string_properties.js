// Because strings are not objects and are immutable
// you cannot add any extra properties to them

let kim = "Kim";
kim.age = 88;
console.log(kim.age);

let string = "6";
console.log(string.padStart(3, "0"));

let okay = "  okay \n ";
console.log(okay.trim() + " sir!");
console.log("coconuts".slice(4, 7));
