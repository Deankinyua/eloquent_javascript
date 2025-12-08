// ? to delegate means to - give responsibility to someone or something

// * We can use event bubbling in JS to delegate tasks to parent elements
// * for example, here we are setting the event handler on the parent of these
// * 16 tiles so that it can do the work of changing the color instead
// * of adding a listener to each element

function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  // * use the debugger keyword which will enable you to pause execution and check for the values or different variables
  // debugger;
  return randomColor;
}

const container = document.querySelector("#tile-container");

container.addEventListener("click", (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
  event.target.style.backgroundColor = bgChange();
});
