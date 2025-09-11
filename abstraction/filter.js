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
    direction: "ltr",
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
    direction: "ltr",
    year: -100,
    living: false,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet",
  },
];

// to get scripts that are still in use i.e living is true, we can :
// getLivingScripts `encapsulates` the logic of getting scripts in use
const getLivingScripts = (scriptList) => {
  let livingScripts = [];

  scriptList.forEach((script) => {
    if (script.living) {
      livingScripts.push(script.name);
    }
  });

  return livingScripts;
};

console.log(getLivingScripts(scriptDataset));
// filter is an inbuilt method of doing the same
console.log(scriptDataset.filter((script) => script.living == true));
