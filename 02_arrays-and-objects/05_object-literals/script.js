const person = {
  name: 'Rashmi Raj',
  age: 30,
  isAdmin: true,
  address: {
    street: 'Katra Chowk',
    city: 'Sheikhpura',
    state: 'Bihar',
  },
  hobbies: ['music', 'sports'],
};

console.log(person, typeof person);

// Access value from object
// 1st way: Using dot operator
x = person.name;
console.log(x);

// 2nd way:Using square brackets
x = person['age'];
console.log(x);

x = person.address.state;
console.log(x);

x = person.hobbies[0];
console.log(x);

person.name = 'Sonu Kumar';
console.log(person);

person.isAdmin = false;
console.log(person);

// Delete a property from object completely
delete person.age;
console.log(person);

// Add a property to object
person.hasChildren = true;
console.log(person);

person.greet = function () {
  console.log(`Hello, my name is ${person.name}.`);
};
person.greet();

// Using Multi-Word string as key
// For this, write the key inside the quotes.
const person_2 = {
  'first name': 'Rashmi',
  'last name': 'Raj',
};
// To access the keys in this case, dot operator won't work.
// We have to use the square brackets.
console.log(person_2['first name']);
