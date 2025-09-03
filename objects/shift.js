let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}

remember("Groceries");
remember("Tea");
remember("Meat");
remember("Milk");
console.log(todoList);
// ? shift removes elements from beginning of an array
getTask();
// console.log(todoList);
// ? unshift adds elements to the beginnning of an array
rememberUrgently("Curry Powder");
// console.log(todoList);

console.log([1, 2, 3, 2, 1].indexOf(2));
const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("duck"));
console.log([1, 2, 3, 2, 1].lastIndexOf(2));

// console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
// console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]
