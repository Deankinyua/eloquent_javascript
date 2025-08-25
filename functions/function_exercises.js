const count_chars = (string, character) => {
  let index = 0;
  let count = 0;

  while (index <= string.length - 1) {
    if (string[index] === character) {
      count++;
    }
    index = index + 1;
  }
  return count;
};

function count_bs(string) {
  return count_chars(string, "B");
}

console.log(count_bs("BBtBjdkjkdjfB"));
console.log(count_chars("Big Boy", "B"));

// const title = "Look Into It";
// let title_length = title.length;
// console.log(title.slice(0, title_length));
