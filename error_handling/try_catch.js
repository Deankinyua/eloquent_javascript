// Errors in JavaScript aren’t just some scary, annoying messages
// They are structured objects that carry a lot of helpful
// information about what went wrong, where, and why.

function divideNumbers(a, b) {
  try {
    if (b === 0) {
      const err = new Error("Division by zero is not allowed.");
      throw err;
    }
    const result = a / b;
    console.log(`The result is ${result}`);
  } catch (error) {
    console.error("Got a Math Error:", error.message);
    console.error("The error is of type:", error.name);
  }
}

divideNumbers(20, 5);
divideNumbers(20, 0);

function parseJSONSafely(str) {
  try {
    return JSON.parse(str);
  } catch (err) {
    console.error("Invalid JSON:", err.message);
    console.error("The error is of type:", err.name);
    return null;
  }
}

const userData = parseJSONSafely('{"name": "tapaScript"}'); // Parsed
const badData = parseJSONSafely("name: tapaScript"); // Handled gracefully
