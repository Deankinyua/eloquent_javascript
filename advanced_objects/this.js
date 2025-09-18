// “this” is the reference to the object that contains the current function
// In other words, the value of this will depend on
// where the function is called at run-time

function doSomething() {
  console.log(this.task);
}
// Avoid doing this :
globalThis.task = "Go to the toilet";
// Execution context is in the global so will refer to global object
doSomething();

let obj = {
  task: "Go to the supermarket",
  doSomething: doSomething,
};

// Execution context is inside an object so will refer to the object
obj.doSomething();

globalThis.a = 6;
let obj_2 = {
  a: 12,
  doSomething: function () {
    console.log(this.a);
  },
};

// Here you don’t call the function — you just copy the reference.
// foo is now just a plain function. It is no longer bound to obj_2.
let foo = obj_2.doSomething;

// foo has been called in the global context, so foo will pass the global this
foo();
// 6
