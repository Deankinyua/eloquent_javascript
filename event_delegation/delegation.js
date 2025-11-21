// ? to delegate means to - give responsibility to someone or something

// * We can use event bubbling in JS to delegate tasks to parent elements
// * for example, here we are setting the event handler on the parent of this
// * 16 tiles so that it can do the work of changing the color instead
// * of adding a listener to each element

function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  return randomColor;
}

const container = document.querySelector("#tile-container");

container.addEventListener("click", (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
  event.target.style.backgroundColor = bgChange();
});
