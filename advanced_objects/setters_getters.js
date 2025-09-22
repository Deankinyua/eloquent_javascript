class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  //   returns current value
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  //   sets a value as the new value
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }
  // a static method doesn't have access to a class instance/object
  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
temp.fahrenheit = 86;
console.log(temp.celsius);
