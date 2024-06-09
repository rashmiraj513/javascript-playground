const fruits = ['apple', 'pear', 'orange'];
console.log(fruits);

const berries = ['strawberry', 'blueberry', 'rasberry'];
console.log(berries);

fruits.push(berries);
console.log(fruits);

const allFruits = [fruits, berries];
console.log(allFruits);

// Accessing a single fruit from allFruits array using indexing
let x = allFruits[0][2];
console.log(x);

// Concatenate two arrays
x = fruits.concat(berries);
console.log(x, typeof x);

// Spread Operator (...): This operator is used to spread all the elements of an array inside other arary.
x = [...fruits, ...berries];
console.log(x);

// Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();
console.log(x);

// Static Methods on Array Object
x = Array.isArray(x);
console.log(x);

x = Array.isArray('Hello');
console.log(x);

x = Array.from('12345');
console.log(x);

const a = 1,
  b = 2,
  c = 3;
x = Array.of(a, b, c);
console.log(x);
