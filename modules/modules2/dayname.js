// Programs grow organically
// Keeping such a program well structured requires constant attention and work

// * When the ways in which modules interact with each other are explicit,
// * a system becomes more like LEGO, where pieces interact through well-defined
// * connectors, and less like mud, where everything mixes with everything else.

const names = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function dayName(number) {
  return names[number];
}

export function dayNumber(name) {
  return names.indexOf(name);
}
