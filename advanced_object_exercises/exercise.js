// The vector type

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vec) {
    let x = vec.x + this.x;
    let y = vec.y + this.y;

    return new Vec(x, y);
  }

  minus(vec) {
    let x = this.x - vec.x;
    let y = this.y - vec.y;

    return new Vec(x, y);
  }

  length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  //   minus(vec) {}
}

const vec = new Vec(9, 10);
const newVec = new Vec(11, 10);
const thirdVec = new Vec(3, 4);

console.log(vec.plus(newVec));
console.log(vec.minus(newVec));
console.log(thirdVec.length());
console.log(new Vec(9, 12).length());
