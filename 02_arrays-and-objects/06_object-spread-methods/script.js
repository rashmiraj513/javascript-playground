// Creating object
const obj = {};
console.log(obj);

// Creating object using object constructor
const todo = new Object();
console.log(todo);

// Adding properties to the object
todo.id = 1;
todo.name = 'Buy Milk';
todo.isCompleted = false;
console.log(todo);

const person = {
  address: {
    coords: {
      lat: 42.9384,
      long: -71.3232,
    },
  },
};

x = person.address.coords.lat;
console.log(x);

const obj_1 = { a: 1, b: 2 };
const obj_2 = { c: 3, d: 4 };

const obj_3 = { obj_1, obj_2 };
console.log(obj_3);

// Merging objects using sperad operator
const obj_4 = { ...obj_1, ...obj_2 };
console.log(obj_4);

// Merging objects using assign method
const obj_5 = Object.assign({}); // Creates a new empty object
console.log(obj_5);

const obj_6 = Object.assign({}, obj_1, obj_2);
console.log(obj_6);

const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Pickup kids from school' },
  { id: 3, name: 'Take out trash' },
];

x = todos[0].name;
console.log(x);

// To get the number of properties an object possess, use `keys` method to get the array of properties.
x = Object.keys(todo);
console.log(x);
console.log(x.length);

// To get the array of values, use `values` method.
x = Object.values(todo);
console.log(x);

// To get the key-value pair as an array, use `entries` method.
x = Object.entries(todo);
console.log(x);

// To check whether an object contains a specific property, use `hasOwnProperty` method
x = todo.hasOwnProperty('age');
console.log(x);

x = todo.hasOwnProperty('name');
console.log(x);
