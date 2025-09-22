class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  sayHi() {
    // console.log(this.#insultUser());
    return `Hello there 👋 ${this.username}`;
  }

  response() {
    return this.#insultUser();
  }

  // private method
  #insultUser() {
    // Basically hide how insultUser is implemented
    // Think of private method as kinda important and you need to
    // hide how you implement them
    return `You are such a bastard ${this.username}`;
  }
}

const userOne = new User("Michael", "munyao@gmail.com");

console.log(userOne.sayHi());
console.log(userOne.response());

class RandomSource {
  // private properties have to be declared
  #max;
  constructor(max) {
    this.#max = max;
  }
  getNumber() {
    let randomNum = Math.random();
    console.log(randomNum);
    // Using the private property #max
    return Math.floor(randomNum * this.#max);
  }
}

const randNum = new RandomSource(90);
console.log(randNum.getNumber());
// console.log([1, 2].toString());
