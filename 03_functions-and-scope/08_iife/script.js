// The varialbe user is already declared in `main.js`. So, this will raise an error.
const user = 'Raj';
console.log(user);

// To declare the same variable, we can use IIFE.
// The syntax of IIFE is the following.
// IIFE Syntax (Has it's own scope and runs right away)
(function () {
  const user = 'Raj';
  console.log(user);
  const hello = () => console.log('Hello from the IIFE!');
  hello();
})();

// Parameter with IIFE
(function (name) {
  console.log('Hello ' + name);
})('Raj');

// Named IIFE (Can only be called recursivley)
(function hello() {
  console.log('Hello');
  // Will go in infinite loop.
  // hello();
})();
