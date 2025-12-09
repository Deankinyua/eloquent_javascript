// ? These are all class expressions different from class declarations which are more popular

// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

let rectangle1 = new Rectangle(300, 200);

console.log(rectangle1.height);
console.log(rectangle1.width);

// Expression; the class has its own name
const Rectangle_3 = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

let rectangle2 = new Rectangle_3(300, 200);

console.log(rectangle2.height);
console.log(rectangle2.width);
