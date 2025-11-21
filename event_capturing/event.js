// * An alternative form of event propagation is event capture.
// * This is like event bubbling but the order is reversed:
// * the event fires first on the outermost element first, and then
// * on successively inner elements, until the target is reached.

// * event capture is disabled by default
// * to enable it you have to pass the capture option in addEventListener()

const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick, { capture: true });
container.addEventListener("click", handleClick, { capture: true });
button.addEventListener("click", handleClick);

// * here when you click the button, the event will first be captured by
// * the body -> the container -> and finally the button

// ? the use cases for event capture are fewer
