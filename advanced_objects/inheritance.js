// Suppose we are in an organization

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  intro() {
    return `${this.name} is an employee who earns Ksh.${this.salary}`;
  }
}

const employee = new Employee("Dean Kinyua", 65000);
console.log(employee.intro());

class Developer extends Employee {
  constructor(stack, name, salary) {
    // * super must have attributes of the parent class in the exact order
    super(name, salary);
    this.stack = stack;
  }
}

const employee_2 = new Developer(
  "JavaScript, Elixir, Ash",
  "Brian Kariuki",
  200000,
);
console.log(employee_2.intro());
console.log(employee_2.stack);
