let JOURNAL = [
  {
    squirrel: false,
    events: ["Smoking weed", "Cutting firewood", "Cooking tea"],
  },
  {
    squirrel: true,
    events: ["Go to the shop", "Milk the camel", "Smoking weed"],
  },
];

// You can loop like this or use the forEach function which is easier

// for (let entry of JOURNAL) {
//   console.log(`${entry.events.length} events.`);
// }

JOURNAL.forEach((entry) => console.log(`${entry.events.length} events.`));

function journalEvents(journal) {
  let events = [];
  journal.forEach((entry) => {
    entry.events.forEach((event) => {
      if (!events.includes(event)) {
        events.push(event);
      }
    });
  });

  return events;
}

const numbers = [1, 2, 3];
numbers.forEach((number, index, arr) => {
  arr[index] = number * 10;
});

console.log(numbers);

console.log(journalEvents(JOURNAL));
