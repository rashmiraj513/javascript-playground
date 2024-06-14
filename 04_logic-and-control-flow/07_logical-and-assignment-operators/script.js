// ||= - Assigns the right side value only if the left is a falsy value.
let a = null;

// if (!a) {
//   a = 10;
// }
// console.log(a);

// Instead of above if block, the Logical OR assignment operator (||=) can be used.
// a = a || 10;

// Shortcut
a ||= 10;
console.log(a);

// &&= - Assigns the right side value only if the left is a truthy value.
let b = 10;

// if(b) {
//   b = 20;
// }

// b = b && 20;

// Shortcut
b &&= 20;
console.log(b);

// ??= - Assigns the right side value only if the left is a null or, undefined value.
let c = null;
// if (c === null || c === undefined) {
//   c = 20;
// }

// Instead of above if block, ??= operator can be used.
// c = c ?? 30;

// Shortcut
c ??= 30;
console.log(c);
