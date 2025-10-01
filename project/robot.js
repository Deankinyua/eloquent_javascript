// A mail-delivery Robot
// * a road is in the form Source-Destination
// * e.g the first road is from Alice's House to Bob's House
const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall",
];

function buildGraph(edges) {
  // Notice how the graph object will not have a prototype
  let graph = Object.create(null);
  function addEdge(from, to) {
    // this check prevents adding identical keys
    if (from in graph) {
      graph[from].push(to);
    } else {
      // Uses the source as a key and adds the destination to its array value
      graph[from] = [to];
    }
  }
  // splits each path according to source and destination
  for (let [from, to] of edges.map((r) => r.split("-"))) {
    // this call captures all sources and adds them as keys
    addEdge(from, to);
    // this call captures all destinations and adds them as keys
    addEdge(to, from);
  }
  return graph;
}

// Given an array of edges, buildGraph creates a map object that, for each node, stores an array of connected nodes.
const roadGraph = buildGraph(roads);

// console.log(roads);
// console.log(roadGraph);
// console.log(roadGraph["Alice's House"]);

// The aim of the Robot is to carry each package it finds at a place
// and move it to a specified location
// If that location happens to be the address of the package, the package will be dropped there.
// The place value of the package changes with the robot's, but the package's address is never changed.

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    // if there doesn't exist a road from our current place to the
    // destination we can't move. Hence return the current state
    // because it's impossible to move.
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels
        .map((p) => {
          // if a parcel is in the current place, move it to the destination
          // otherwise leave it as it is
          if (p.place == this.place) {
            return { place: destination, address: p.address };
          }
          return p;
        })
        // Get rid of all parcel's that have reached their destination
        // A parcel has reached it's destination if the place is equal to the address
        .filter((p) => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}

const items = [
  // Since Groundnuts is at Alice's House it will be picked and moved to Bob's House
  // The destination for Groundnuts is Bob's House so it will be dropped there
  {
    name: "Groundnuts",
    place: "Alice's House",
    address: "Bob's House",
  },

  // Mango is not at Alice's House so it can't be moved
  // It will be left in the state as its destination is not Bob's House but the Town Hall
  {
    name: "Mango",
    place: "Bob's House",
    address: "Town Hall",
  },
];

const state = new VillageState("Alice's House", items);
console.log(state);

let state_2 = state.move("Bob's House");
let state_3 = state_2.move("Town Hall");

console.log(state_2);
console.log(state_3);

let first = new VillageState("Post Office", [
  { place: "Post Office", address: "Alice's House" },
]);
let next = first.move("Alice's House");

console.log(next.place);
// → Alice's House
console.log(next.parcels);
// → []
// Old state is not changed, the move method creates a new state
console.log(first.place);
// → Post Office
