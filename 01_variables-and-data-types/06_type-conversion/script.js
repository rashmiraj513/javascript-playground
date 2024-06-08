// Type Conversion (Explicit Conversion)
let amount = '100';

// Three ways to convert a string to a number
// amount = parseInt(amount);
// amount = +amount;
amount = Number(amount);
console.log(amount, typeof amount);

// Two ways to convert a number to a string
let val = 100;
// Here, val is a primitive data type, so it should not have any member method as objects.
// So, internally, JavaScript creates a wrapper object so that it can have the member method
// toString to convert the number to a string.
// val = val.toString();
val = String(val);
console.log(val, typeof val);

// Convert the string to a decimal
let decimal = 99.5;
// Here, parseInt can also be used but that will discard the value after decimal.
decimal = parseFloat(decimal);
console.log(decimal, typeof decimal);

// Convert the Number to Boolean
// Here, Truthy and Falsey concept works. All truthy value are treated as true and all falsey value are treated as false.
// Truthy Value
let booleanVal = 3;
booleanVal = Boolean(booleanVal);
console.log(booleanVal, typeof booleanVal);

// Falsy Value
let booleanValue = 0;
booleanValue = Boolean(booleanValue);
console.log(booleanValue, typeof booleanValue);

// When we try to convert a string consisting alphanumeric characters to a number, then
// after the type conversion, the result is NaN (Not a Number).
let str = '123e';
str = Number(str);
console.log(str, typeof str);

// Including this, there are 4 more cases where the result is NaN (Not a Number).
// Doing some mathematically impossible calculation
console.log(Math.sqrt(-1));

// Performing arithmetic operation with NaN / undefined and one number
console.log(5 + undefined);

// Performing arithmetic operation with undefined / NaN with itself or, each other.
console.log(NaN + NaN);
console.log(undefined + undefined);
console.log(NaN + undefined);

// Performing arithmetic operation with string and number
console.log('foo' / 3);
