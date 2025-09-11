const scriptDataset = [
  {
    name: "Coptic",
    ranges: [
      [994, 1008],
      [11392, 11508],
      [11513, 11520],
    ],
    direction: "ltr",
    year: -200,
    living: true,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet",
  },

  {
    name: "Mongolian",
    ranges: [
      [994, 1008],
      [11392, 11508],
      [11513, 11520],
    ],
    direction: "rtl",
    year: 20,
    living: true,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet",
  },

  {
    name: "Latin",
    ranges: [
      [994, 1008],
      [11392, 11508],
      [11513, 11520],
    ],
    direction: "rtl",
    year: -100,
    living: false,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet",
  },
];

// * Map just like how we do in Elixir

function map(array, transform) {
  let mapped = [];

  array.forEach((element) => {
    mapped.push(transform(element));
  });

  return mapped;
}

let rtlScripts = scriptDataset.filter((s) => s.direction == "rtl");
console.log(map(rtlScripts, (s) => s.name));
// Built-in map
console.log(rtlScripts.map((script) => script.name));
