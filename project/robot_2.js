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

const mailRoute = [
  "Alice's House",
  "Cabin",
  "Alice's House",
  "Bob's House",
  "Town Hall",
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  "Shop",
  "Grete's House",
  "Farm",
  "Marketplace",
  "Post Office",
];

function buildGraph(edges) {
  // Notice how the graph object will not have a prototype
  let graph = Object.create(null);
  function addEdge(from, to) {
    // this check prevents adding identical keys
    if (from in graph) {
      graph[from].push(to);
    } else {
      // In the case where the source has not been added yet, add the destination as its first array value
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

// state is an instance of VillageState consisting of a place and a list of parcels
// runRobot will first check if we have any parcels
// if we don't then it's done with its job
// Otherwise it will move to a random place
// If it moved to somewhere where a package is addressed, that package will be dropped there.
// It does this until there is no package left and at that point state.parcels.length will be 0
function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      // Terminate the loop if there are no parcels
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    // console.log(`Moved to ${action.direction}`);
  }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

// this is the actual robot, it decides which place to move but in this case it's completely random
function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}

function findRoute(graph, from, to) {
  let work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];

    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      // Once you see !array.some(function), know that we are testing if the condition is false for every element in the array.
      if (!work.some((w) => w.at == place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}

// work = [
//   { at: "Bob's House", route: [] },
//   { at: "Alice's House", route: ["Alice's House"] },
//   { at: "Town Hall", route: ["Alice's House", "Town Hall"] },
// ];

// Given an array of edges, buildGraph creates a map object that, for each node, stores an array of connected nodes.
const roadGraph = buildGraph(roads);
// console.log(`The places are ${roadGraph["Town Hall"]}`);
const shortestRoute = findRoute(roadGraph, "Bob's House", "Marketplace");
console.log(shortestRoute);

export { roadGraph, randomPick, items, runRobot, randomRobot, routeRobot };
