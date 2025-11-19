// ? -------------------------------------------------
// ? Event bubbling from the child to the parent

const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
container.addEventListener("click", handleClick);

// Even though it was the button that was clicked,
// the DIV element receives the event as it is the parent of the element

// ? -------------------------------------------------
// ? Event bubbling from the child to the parent

const output_2 = document.querySelector("#output-2");
function handleClick_2(e) {
  output_2.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container_2 = document.querySelector("#container-2");
const button = document.querySelector("#btn-2");

container_2.addEventListener("click", handleClick_2);
button.addEventListener("click", handleClick_2);

// The button now processes the event and outputs its outcome.
// The event is bubbled up to the parent container and it also handles it.
// * In other words, event bubbles up from the innermost element
// * was clicked.
