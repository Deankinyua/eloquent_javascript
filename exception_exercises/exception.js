// Say you have a function primitiveMultiply that in 20 percent of
// cases multiplies two numbers and in the other 80 percent of cases
// raises an exception of type MultiplicatorUnitFailure.
// Write a function that wraps this clunky function and just keeps
// trying until a call succeeds, after which it returns the result.

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("MultiplicatorUnitFailure error");
  }
}

function reliableMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      console.log(e.message);
      if (!(e instanceof MultiplicatorUnitFailure)) throw e;
    }
  }
}

// console.log(reliableMultiply(9, 10));

// The locked box
// Write a function called withBoxUnlocked that takes a function
// value as argument, unlocks the box, runs the function, and then
// ensures that the box is locked again before returning,
// regardless of whether the argument function returned normally
// or threw an exception.

class Box {
  locked = true;
  #content = ["uanga"];

  checkStatus() {
    return this.locked ? "Locked" : "Unlocked";
  }

  unlock() {
    this.locked = false;
  }
  lock() {
    this.locked = true;
  }
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this.#content;
  }
}

let box = new Box();

// console.log(`The box is ${box.checkStatus()}`);
// console.log(`The content of the box is ${box.content}`);

function withBoxUnlocked(callback) {
  let locked = box.locked;
  if (locked) box.unlock();

  try {
    return callback();
  } finally {
    box.locked = locked;
  }
}

const returnValue = withBoxUnlocked(() => box.content.push("gold piece"));

console.log(returnValue);

try {
  withBoxUnlocked(() => {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}

console.log(box.locked);
box.unlock();
console.log(box.content);
