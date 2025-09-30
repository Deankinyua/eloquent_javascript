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
console.log(roadGraph);
