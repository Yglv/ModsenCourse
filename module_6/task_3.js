class Employee {
  constructor(name, salary) {
      this.name = name;
      this.salary = salary;
  }

  calculateAnnualSalary() {
      return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
      super(name, salary);
      this.department = department;
  }

  calculateAnnualSalary() {
      let baseSalary = super.calculateAnnualSalary();
      let bonus = baseSalary * 0.1;
      return baseSalary + bonus;
  }
}

let manager1 = new Manager("Егор", 5000, "Продажи");
let manager2 = new Manager("Олег", 6000, "Маркетинг");

console.log(`Годовая зарплата ${manager1.name}: ${manager1.calculateAnnualSalary()}`);
console.log(`Годовая зарплата ${manager2.name}: ${manager2.calculateAnnualSalary()}`);
