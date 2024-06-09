const firstName = 'Rashmi';
const lastName = 'Raj';
const age = 30;

// Create a new object using these values
const person_1 = {
  firstName: firstName,
  lastName: lastName,
  age: age,
};
console.log(person_1);

// Shortcut for achieving the same
// If the key and value name is same, then this following syntax can be used.
const person_2 = {
  firstName,
  lastName,
  age,
};

console.log(person_2);

// Destructuring the object
const todo = {
  id: 1,
  title: 'Take out trash!',
  user: {
    name: 'John',
  },
};

// Extracting the values from the object.
const { id, title, user } = todo;
console.log(id, title, user);

// Here, we can also rename the keys after destructuring the object.
// We can also go deep in levels.
const {
  id: pid,
  title: ptitle,
  user: { name },
} = todo;
console.log(pid, ptitle, name);

// Destructuring the array
const numbers = [23, 67, 33, 29, 52];
const [first, second] = numbers;
console.log(first, second);

// Using rest(...) (Same as spread operator) to get the remaining elements as an array.
const [third, forth, ...rest] = numbers;
console.log(third, forth, rest);
