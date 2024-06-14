// `const` and `let` are block scoped whereas `var` is functional scoped.
// i.e., The variables of type const and let can't be accessed outside the block
// whereas the variables of type var can be accessed outside the block scope
// but not outside functional scope.

// A variable of type `var` with global scope becomes available at `window` object level.
// whereas `const` or, `let` with global scope doesn't become available at `window` object.
const x = 100;

if (true) {
  const y = 200;
  console.log(x + y);
}

// Will give an error because y is const.
// If y is of var type then it won't get any error.
console.log(x + y);

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Will give an error because i is let. If i is of var type then it won't get any error.
console.log(i);

if (true) {
  const a = 500;
  let b = 600;
  var c = 70;
}
console.log(c);

function run() {
  var d = 100;
  console.log(d);
}

// Will raise an error because var is functional scoped.
console.log(d);
