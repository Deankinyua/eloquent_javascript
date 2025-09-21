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
console.log(blackRabbit.speak("I like darkness"));

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
}

const user1 = new User("Dean", "kinyuadean@gmail.com");
console.log(user1);
