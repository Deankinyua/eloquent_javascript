let list = [1, 2, 3, 4];

let person = {
  age: 22,
  name: "Dean Kinyua",
  subjects: ["Maths", "English", "Kiswahili"],
};

console.log(list[0]);
console.log(person.name);
console.log(person["age"]);

// Methods
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);

// includes method of an array
console.log(person.subjects.includes("English"));
