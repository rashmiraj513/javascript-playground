// Logical AND (&&) Operator: Returns true if and only if all expressions are true.
console.log(10 < 20 && 30 > 15 && 40 > 30); // Must all be true

// Logical OR (||) Operator: Returns true if any expression is true.
console.log(10 > 20 || 30 < 15); // Only one has to be true

// Logical AND (&&) - Will return first falsy value or the last value
let a;
a = 10 && 20;
console.log(a);

a = 10 && 20 && 30;
console.log(a);

a = 10 && 0 && 30;
console.log(a);

a = 10 && '' && 0 && 30;
// Here, a is returning the empty string (the first falsy value) ('')
console.log(a, typeof a);

const posts = ['Post One', 'Post Two'];
posts.length > 0 && console.log(posts[0]);

// Logical OR (||) - Will return the first truthy value or the last value.
a = 10 || 20;
console.log(a);

a = 0 || 20;
console.log(a);

a = 0 || null || '' || undefined;
console.log(a);

// ?? - Returns the right side operand when the left is null or, undefined.
a = 10 ?? 20;
console.log(a);

a = null ?? 20;
console.log(a);

a = undefined ?? 30;
console.log(a);

a = 0 ?? 30;
console.log(a);

a = '' ?? 30;
console.log(a);

a = undefined ?? null; // Returns the right side value
console.log(a);
