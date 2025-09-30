globalThis.input = 2;

function square() {
  let cbFn = () => {
    console.log(this.input);
    console.log(this.input * this.input);
  };
  setTimeout(cbFn, 1000);
}

let obj = {
  input: 3,
  square: square,
};
let foo = obj.square;

foo();
