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

const box = new (class {
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
})();

box.unlock();
console.log(`The box is ${box.checkStatus()}`);
console.log(`The content of the box is ${box.content}`);
