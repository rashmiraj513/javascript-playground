class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this._name} and I am ${this._age} years old.`
    );
  }
}

export default Person;
