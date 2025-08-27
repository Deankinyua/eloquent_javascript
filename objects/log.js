let journal = [];

// ? Use the shorthand -> if a property name in brace notation isn’t followed by a value,
// ? its value is taken from the binding with the same name.

function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

console.log(journal);
