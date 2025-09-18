// Call and apply methods are a way to combat the misbehaviour of this
// With apply you apply the function to an object hence being
// explicit on the execution context

const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person1 = {
  firstName: "Mary",
  lastName: "Doe",
};

// Apply takes an object as an argument
// This will return "Mary Doe":
console.log(person.fullName.apply(person1));

const car = {
  description: function (horsepower, weight) {
    return (
      this.firstName +
      " " +
      this.lastName +
      " with " +
      horsepower +
      " weighing " +
      weight
    );
  },
};

const car1 = {
  firstName: "Mercedes",
  lastName: "GLE",
};

const car2 = {
  firstName: "Range Rover",
  lastName: "Vogue",
};

console.log(car.description.call(car1, "1000cc", "500kg"));
// call and apply are the same only that apply takes args as an
// array while call takes them separately
console.log(car.description.apply(car2, ["2000cc", "1500kg"]));
