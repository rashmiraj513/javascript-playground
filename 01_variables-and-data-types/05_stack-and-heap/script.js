// Primitive Data Types (Values are stored on the stack)
const fullName = 'Rashmi Raj';
const age = 30;

let newName = fullName;
newName = 'Raj';
console.log(fullName);
console.log(newName);

// Reference Data Types (Values are stored on the heap)
const person = {
  name: 'Rashmi Raj',
  age: 40,
};

let newPerson = person;
newPerson.name = 'Sonu';
console.log(person);
console.log(newPerson);
