// Normal Function Declaration
function add(a, b) {
  return a + b;
}
console.log(add(5, 3));

// Function Expression
const subtraction = function (a, b) {
  return a - b;
};
console.log(subtraction(2, 10));

// Arrow Function
const multiplication = (a, b) => {
  return a * b;
};
console.log(multiplication(12, 4));

// Shortcut of Arrow Function
const divide = (a, b) => a / b;
console.log(divide(34, 12));

// When the number of arguments are 1, then parentheses is not necessary.
const double = (a) => a * 2;
// const double = a => a * 2;
console.log(double(12));

// Returning an object
// Here, function and object both uses curly braces.
// To avoid confusion, a parenthesis is added.
const createObj = () => ({
  name: 'Brad',
});
console.log(createObj());

const numbers = [1, 2, 3, 4, 5];

// For Each Loop and callback function
numbers.forEach(function (n) {
  console.log(n);
});

// Arrow function in a callback
numbers.forEach((n) => console.log(n));
// Here, only one parameter is there. So, no parenthesis is required.
// numbers.forEach(n => console.log(n));
