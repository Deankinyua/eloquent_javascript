// A class defines the shape of a type of object, what
// methods and properties it has. Such an object is
// called an instance of the class.

// Classes are not objects, they are functions,
// and templates that create an object.

// This is the common way of defining a class called a class declaration
class Rabbit {
  constructor(type) {
    // anything inside the constructor is stored on the actual object
    this.type = type;
  }
  speak(line) {
    return `The ${this.type} rabbit says '${line}'`;
  }
}

const blackRabbit = new Rabbit("Black");
// classes are a shorter way of dealing with prototypes
Rabbit.prototype.teeth = "small";
console.log(blackRabbit.teeth);
// methods and properties are stored in the class's prototype
// in other words a class is a way to create a prototype with certain properties
// which instantiated objects will inherit
console.log(Rabbit.prototype.speak());
console.log(blackRabbit.speak("I like darkness"));

console.log(Object.hasOwn(blackRabbit, "speak"));
// false → `speak` is not an "own" property of the instance

console.log(Object.hasOwn(Rabbit.prototype, "speak"));

// → a killer rabbit
// true => it's in the prototype

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  static sayHi() {
    return "Hello world";
  }
}

const user1 = new User("Dean", "kinyuadean@gmail.com");
// Static methods
// are not inherited and belong to only the class
// * Static methods are not associated with any object
// * The Reflect namespace is what brought me back here
// * All properties and methods of Reflect are static just like the Math object.
console.log(user1.sayHi());
// => sayHi is not a function
console.log(User.sayHi());
// You can store general info in static methods e.g handling date and time
