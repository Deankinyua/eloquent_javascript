// A mail-delivery Robot

import {
  roadGraph,
  randomPick,
  items,
  runRobot,
  randomRobot,
  routeRobot,
} from "./robot_2.js";

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

VillageState.random = function (parcelCount = 1) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
      // if the place is equal to the address it picks another place and does not push identical pairs of place and address.
    } while (place == address);
    parcels.push({ place, address });
  }
  return new VillageState("Post Office", parcels);
};
let villageState = VillageState.random();
// runRobot(villageState, randomRobot);
runRobot(villageState, routeRobot, []);

const state = new VillageState("Alice's House", items);
// console.log(state);

let state_2 = state.move("Bob's House");
let state_3 = state_2.move("Town Hall");

// console.log(state_2);
// console.log(state_3);

let first = new VillageState("Post Office", [
  { place: "Post Office", address: "Alice's House" },
]);
let next = first.move("Alice's House");

// console.log(next.place);
// → Alice's House
// console.log(next.parcels);
// → []
// Old state is not changed, the move method creates a new state
// console.log(first.place);
// → Post Office
