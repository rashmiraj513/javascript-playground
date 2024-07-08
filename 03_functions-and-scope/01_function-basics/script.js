// Defines a function
function sayHello() {
  console.log('Hello, World!');
}

// After defining the function, we have to call the function in order to execute it.
sayHello();

// Parameters vs. Arguments
// The variable names passed at the time of function definition is called parameters.
// Here, num_1 and num_2 are parameters.
function add(num_1, num_2) {
  console.log(num_1 + num_2);
}

// The variables passed at the time of function calling is called arguments.
// Here, 5 and 10 is the arguments.
add(5, 10);

// Return Statement
function subtract(num_1, num_2) {
  return num_1 - num_2;

  // Below return statement nothing will execute.
  console.log('After the return');
}

// Assign the returned value to a variable and then the variable can be used
// for various purposes.
const res = subtract(10, 2);

console.log(res, subtract(5, 10));
