// Ways to declare a variable
// var, let and const
// var is not used a lot anymore.

let firstName = 'Rashmi';
let lastName = 'Raj';

console.log(firstName, lastName);

// If a variable is used before its declaration (with let keyword) then it'll raise an error.
console.log(firstName, lastName, age);
let age = 30;

// But if the same variable is used before its declaration (with var keyword) then it won't raise an error.
// It will just print `undefined`. This concept is known as 'Hoisting'.
console.log(firstName, lastName, dob);
var dob = 31 - 12 - 1999;

/*
 * Variables name must follow some rules:
		- Only letters, numbers, underscores and dollar signs are allowed.
		- Can't start with a number.
 */

/*
 * Multi-Word Formatting
 * firstName: Camel Case
 * first_name: Snake Case
 * FirstName: Pascal Case
 * firstname: lowercase
 */

// Re-Assigning Variables
age = 31;
console.log(age);

let score;
score = 1;
console.log(score);

if (true) {
  score++;
}
console.log(score);

const val = 100;
console.log(val);

// This will raise an error as variables with const keyword can't be re-assigned.
val = 200;
console.log(val);

// This will also raise an error as variables with const keyword must be assigned some value
// at the time of declaration itself.
const value;
console.log(value);

const arr = [1, 2, 3, 4];
console.log(arr);

// This will raise an error as variables with const keyword can't be re-assigned.
// Here, we are re-assigning the address of new array to the arr variable.
arr = [4, 5, 6];
console.log(arr);

// But, if we want to update into the same array, then it won't raise any error.
arr.push(5);
console.log(arr);

// Object
const person = {
  name: 'Rashmi',
};
console.log(person);

// Changing Object field
person.name = 'Raj';
console.log(person);

// Adding new field to the object
person.email = 'rashmiraj@gmail.com';
console.log(person);

// Assigning multiple variables at the same time
let a, b, c;
console.log(a, b, c); // Prints undefined

// const d, e, f; will raise an error because the variables with const keyword must have been
// declared with some value.
const d = 5,
  e = 6,
  f = 7;
console.log(d, e, f);
