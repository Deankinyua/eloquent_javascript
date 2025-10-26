// * What is the error object ?

function doSomething() {
  const x = y + 1; // y is not defined
}
try {
  doSomething();
} catch (err) {
  // error object contains the error type, message and the stacktrace
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
}
