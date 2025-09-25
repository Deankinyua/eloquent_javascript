class Product {
  static #quantity = 0;
  constructor(id, name, amount) {
    this.id = id;
    this.name = name;
    this.amount = amount;
  }

  static retrieveQuantity() {
    return Product.#quantity;
  }
  static incrementQuantity() {
    Product.#quantity++;
  }
}

const dress = new Product(1, "dress", 50);
Product.incrementQuantity();

const coat = new Product(2, "coat", 30);
Product.incrementQuantity();

const jeans = new Product(3, "jeans", 90);
Product.incrementQuantity();

console.log(Product.retrieveQuantity());
console.log(jeans.amount);
