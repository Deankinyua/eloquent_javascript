// ? A popular serialization format

let log = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
};
let jsonLog = JSON.stringify(log);
let log2 = JSON.parse(jsonLog);

console.log(jsonLog);
console.log(log2);
