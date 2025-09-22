// A class defines the shape of a type of object, what
// methods and properties it has. Such an object is
// called an instance of the class.

// Classes are not objects, they are functions,
// and templates that create an object.
class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
    return 0;
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
console.log(user1);
// Static methods
// are not inherited and belong to only the class
// console.log(user1.sayHi())
// => sayHi is not a function
console.log(User.sayHi());
// You can store general info in static methods e.g handling date and time
