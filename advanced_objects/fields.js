class User {
  password = "broman";

  constructor(username, email) {
    this.username = username;
    this.email = email;
    // * Uncommenting this out will lead to user.password being mukami
    // this.password = "mukami";
  }
}

const user = new User("Harry Potter", "potter@gmail.com");
console.log(user.password);

class Product {
  static quantity = 0;
  constructor(id, name, amount) {
    this.id = id;
    this.name = name;
    this.amount = amount;
  }
}

const dress = new Product(1, "dress", 50);
Product.quantity++;

const coat = new Product(2, "coat", 30);
Product.quantity++;

const jeans = new Product(3, "jeans", 90);
Product.quantity++;

console.log(Product.quantity);
console.log(jeans.amount);
// quantity is a static property, not inherited
console.log(jeans.quantity);
