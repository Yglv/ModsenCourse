class Person {
  constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
  }

  showPersonInfo() {
      return `Имя: ${this.name}, Возраст: ${this.age}, Страна: ${this.country}`;
  }
}

let firstPerson = new Person("Егор", 30, "Беларусь");
let secondPerson = new Person("Андрей", 25, "Россия");

console.log(firstPerson.showPersonInfo());
console.log(secondPerson.showPersonInfo());
