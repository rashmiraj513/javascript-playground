// Data Types
// There are two data types in JavaScript
// Primitive Data Types
// Reference Data Types

// Primitive Data Types (Stored directly in the stack, where it is accessed from)
// String: Sequence of characters. Must be in quotes (Single or, Double) or, backticks (``).
// Number: Integers as well as floating-point numbers.
// Boolean: Logical Entity (true or, false)
// Null: Intentional absense of any object value.
// Undefined: A variable that has not yet been defined / assigned.
// Symbol: Built-in object whose constructor returns a unique symbol.
// BigInt: Numbers that are greater than the <em>Number</em> type can handle.

// Reference Types (Objects) (Stored in the heap and accessed by reference)
// Reference types or, 'objects' are a non-primitive value and when assigned to a variable, the variable is given a reference to that value.
// Object literals, arrays and functions are all reference types.

// Static Typing vs.Dynamic Typing
// JavaScript is a dynamically-typed language. This means, we don't explicitly define the types for our variables.
// Many Other languages are statically-typed such as C, C++ and Java.
// TypeScript is a superset of JavaScript, which allows static typing. This can make your code more verbose and less
// prone to errors.

// Primitive Data Types
// String
const firstName = 'Rashmi';
console.log(firstName, typeof firstName);

// Number
const age = 30;
console.log(age, typeof age);

const temp = 98.9;
console.log(temp, typeof temp);

// Boolean
const hasKids = true;
console.log(hasKids, typeof hasKids);

// Null
// The typeof null is object because In the first implementation of JavaScript, JavaScript values were
// represented as a type tag and a value.The type tag for objects was 0. null was represented as the NULL
// pointer(0x00 in most platforms). Consequently, null had 0 as type tag, hence the typeof return value 'object'.
// Read More: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null
const aptNumber = null;
console.log(aptNumber, typeof aptNumber);

// Undefined
let score;
const val = undefined;
console.log(score, typeof score);
console.log(val, typeof val);

// Symbol
const id = Symbol('id');
console.log(id, typeof id);

// BigInt (Append n at last of a number to make that number a BigInt)
const bigVal = 9n;
console.log(bigVal, typeof bigVal);

// Reference Types
// Arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr, typeof arr);

// Objects
const person = {
  name: 'Rashmi Raj',
};
console.log(person, typeof person);

// Functions
// The type of the function is object because in JavaScript, the functions are first-class objects.
function sayHello() {
  console.log('Hello');
}
console.log(sayHello, typeof sayHello);
