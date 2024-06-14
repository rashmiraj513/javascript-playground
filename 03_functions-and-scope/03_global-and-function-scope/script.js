window.alert('Hello, World!');
console.log(window.innerWidth);

// Since, window is a globally scoped object. Hence, the above two lines can be
// written like the following.
alert('Hello, World!');
console.log(window.innerWidth);

// Global Scope Variable
const x = 100;
console.log(x, 'In Global Scope');

function run() {
  // Access global variables in function
  console.log(window.innerHeight);
  console.log(x, 'In Functional Scope');
}
run();

// Access global variables in blocks
if (true) {
  console.log(x, 'In Block Scope');
}

function add() {
  // Overwriting global x (Variable Shadowing)
  const x = 1,
    y = 50;
  console.log(x + y);
}
add();

// Can not access a function scoped variable in global scope
console.log(y);
