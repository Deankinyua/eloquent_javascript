function createCounter() {
  let count = 0; // This is our backpack
  return function () {
    count++; // Accessing count from the outer scope
    return count;
  };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Creating private functions 

function playerScore() {
  let score = 0;
  return {
    increase: function () {
      score += 10;
      return score;
    },
    getScore: function () {
      return score;
    },
  };
}

const player = playerScore();
console.log(player.getScore()); // 0
console.log(player.increase()); // 10
console.log(player.getScore()); // 10
console.log(player.increase()); // 20
console.log(player.getScore()); // 20
