// Ways to create an array
// 1. Array Literal
const numbers = [12, 45, 33, 23, 29, 47];
console.log(numbers);

// 2. Array Constructor
const fruits = new Array('apple', 'peach', 'banana', 'grape');
console.log(fruits);

// An array in JavaScript can contain elements of different data types.
const mixed = [12, 'Hello', true, null];

// Accessing elements from the array
x = numbers[0];
console.log(x);

x = numbers[0] + numbers[3];
console.log(x);

x = `My favorite fruit is ${fruits[0]}.`;
console.log(x);

// Number of elements in the array
console.log(fruits.length);

// Changing the elements in the array using indexing
fruits[2] = 'mango';
console.log(fruits);

// Trim the array using length, the elements from 2nd index to the end will be removed from the array.
// Because of this, the new array will be of length 2.
fruits.length = 2;
console.log(fruits);

// Pushing new elements into the array using indexing
fruits[2] = 'strawberry';
console.log(fruits);

fruits[fruits.length] = 'blueberry';
console.log(fruits);

// If the index value is greater than the length of the array, then the new element will be
// added to the array[index] position and the indices in between will be filled with empty.
fruits[5] = 'guava';
// So, fruits[5] will be guava and the index 4 will have element as empty.
console.log(fruits);
