/* Similarly, an abstract data type, or object class, 
is a subprogram that may contain arbitrarily complicated code
but exposes a limited set of methods and properties 
that people working with it are supposed to use. 
This allows large programs to be built up out of a 
number of appliance types, limiting the degree to which
these different parts are entangled by requiring them
to only interact with each other in specific ways. */

// Methods

function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry", speak };

whiteRabbit.speak("You fucking son of a bitch!!");
hungryRabbit.speak("Got any carrots?");
