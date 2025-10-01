// A frozen object can no longer be changed: new properties cannot be added,
// existing properties cannot be removed, their enumerability, configurability, writability,
// or value cannot be changed, and the object's prototype cannot be re-assigned.

"use strict";

const obj = {
  prop: 42,
};

Object.freeze(obj);

// This will return a type error in strict mode, but will fail silently in non-strict mode
obj.prop = 33;

console.log(obj.prop);
