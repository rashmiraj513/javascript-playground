class Person {
  constructor(firstName, lastName) {
    // In `_firstName`, _ denotes that this variable is a private variable and
    // one shouldn't access this directly.
    this._firstName = firstName;
    this._lastName = lastName;
  }

  // Getter Function for firstName
  get firstName() {
    return this.capitalizeFirst(this._firstName);
  }

  // Setter Function for lastName
  set firstName(value) {
    this._firstName = this.capitalizeFirst(value);
  }

  // Getter Function for lastName
  get lastName() {
    return this.capitalizeFirst(this._lastName);
  }

  // Setter Function for lastName
  set lastName(value) {
    this._lastName = this.capitalizeFirst(value);
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  capitalizeFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

const person = new Person('john', 'doe');
console.log(person.firstName);
console.log(person.lastName);

person.firstName = 'joe';
person.lastName = 'smith';
console.log(person.fullName);
console.log(person);
