function createList(validate) {
  // creates a private list that can only be accessed and mutated using the add and get methods
  const items = [];

  return {
    add: function (item) {
      if (validate(item)) {
        items.push(item);
      }
    },
    get: function (i) {
      return items[i];
    },
  };
}

const verifyNum = (value) => (value > 1 ? true : false);

let createListObj = createList(verifyNum);

createListObj.add(10);
createListObj.add(97);
createListObj.add(3);
createListObj.add(101);
createListObj.add(2);

let value = createListObj.get(2);

console.log(value);
