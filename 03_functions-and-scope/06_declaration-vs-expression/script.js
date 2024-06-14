// Function Declaration
// The main advantage of function declaration is we can use a function declared
// with this syntax before the function definition.

console.log(addDollarSign(200));

function addDollarSign(value) {
  return '$' + value;
}

console.log(addDollarSign(100));

// Function Expression
// With function expression, we can't use the function before definition.

// Will raise an error.
console.log(addPlusSign(200));

const addPlusSign = function (value) {
  return '+' + value;
};
console.log(addPlusSign(100));
