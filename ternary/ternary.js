// ? Ternary Operators are a way of writing if else statements
// Consider:
const score = 80;
let scoreRating;

if (score > 70) {
  scoreRating = "Excellent";
} else {
  scoreRating = "Do better";
}

console.log(scoreRating);
// ? The above can be easily written as:

const score_2 = 80;

// Ternary operators in JavaScript
// ? condition ? expressionIfTrue : expressionIfFalse

let scoreRating_2 =
  score_2 > 70
    ? "The score is excellent"
    : "The score is poor. You can do better";

console.log(scoreRating_2);
// ? Nested ternary operators

const score_3 = 60;

let scoreRating_3 =
  score_3 > 70 ? "Excellent" : score > 50 ? "Average" : "Do better";

console.log(scoreRating_3);
