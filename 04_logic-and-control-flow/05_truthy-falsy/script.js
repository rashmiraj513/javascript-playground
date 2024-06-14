// Falsy Values
// - false
// - 0
// - "" or '' (Empty String)
// null
// undefined
// NaN
let x;

// Boolean Falsy Value
x = false;
console.log(Boolean(x));

// Number Falsy Value
x = 0;
console.log(Boolean(x));

// String Falsy Value (Empty String)
x = '';
console.log(Boolean(x));

// Null
x = null;
console.log(Boolean(x));

// undefined
x = undefined;
console.log(Boolean(x));

// NaN
x = NaN;
console.log(Boolean(x));

// Truthy Values
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (Space in a string)
// - 'false' (false in a string)
// - [] (Empty Array)
// - {} (Empty Object)
// - function () {} (Empty Function)

// Boolean Truthy Value
x = true;
console.log(Boolean(x));

// Number Truthy Value (Any number other than 0)
x = 4;
console.log(Boolean(x));

// String Truthy Value (0 in a tring)
x = '0';
console.log(Boolean(x));

// String Truthy Value (' ' in a tring)
x = ' ';
console.log(Boolean(x));

// String Truthy Value ('false' in a tring)
x = 'false';
console.log(Boolean(x));

// Empty Array
x = [];
console.log(Boolean(x));

// Empty Object
x = {};
console.log(Boolean(x));

// Empty Function
x = function () {};
console.log(Boolean(x));

// Truthy and Falsy Caveats

// 1. Checking for literal 0
const children = 0;

if (children) {
  console.log(`You have ${children} chidren.`);
} else {
  console.log('Please enter number of children.');
}

// The problem in caveat 1 is when the number of children is 0, it will
// still execute the else block because 0 is a falsy value.

// Solution 1: If children is not undefined
if (children !== undefined) {
  console.log(`You have ${children} chidren.`);
} else {
  console.log('Please enter number of children.');
}

// Solution 2: If children is not a number (NaN)
if (isNaN(children)) {
  console.log(`You have ${children} chidren.`);
} else {
  console.log('Please enter number of children.');
}

// 2. Checking for empty arrays
const posts = [];

if (posts) {
  console.log('List Posts');
} else {
  console.log('No Posts to List');
}

// The problem with caveat 2 is even when the array is empty, it will execute
// the if block because the empty array is a truthy value.

// Solution: Checking the length of array
if (posts.length > 0) {
  console.log('List Post');
} else {
  console.log('No Post to List');
}

// 3. Checking for empty objects
const user = {};

if (user) {
  console.log('List User');
} else {
  console.log('No User');
}

// The problem with caveat 3 is even when the object is empty
// (have no properties), it will execute the if block because
// the empty object is a truthy value.

// Solution: Checking the number of properties in the object
if (Object.keys(user).length > 0) {
  console.log('List User');
} else {
  console.log('No User to List');
}

// Loose Equality (==): This equality operator just equates the value not the data type.
console.log(false == 0); // true
console.log('' == 0); // true
console.log(undefined == null); // true

// Strict Equality (===): This equality operator equates the value as well as the data type.
// Using Strict Equality is always recommended when equating two literals in JavaScript.
console.log(false === 0); // false
console.log('' === 0); // false
console.log(undefined === null); // false
