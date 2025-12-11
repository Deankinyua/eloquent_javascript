// The ugly way of creating self-contained code (nowadays 'modules')
// that JavaScript developers had created (before 2015) back then, when modular
// systems using export and import didn't exist.

// * people just manually wrapped their entire code in an
// * “immediately invoked function expression” since a function scope's is private and will
// * prevent name clashes
const weekDay = (function () {
  const names = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return {
    name(number) {
      return names[number];
    },
    number(name) {
      return names.indexOf(name);
    },
  };
})();

console.log(weekDay.name(weekDay.number("Sunday")));
// → Sunday
