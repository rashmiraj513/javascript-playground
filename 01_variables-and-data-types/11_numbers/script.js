const num = new Number(5.45312);

let x = num.toString();
console.log(x, typeof x);

x = num.toString().length;
console.log(x);

// To get 2 places after the decimal. This toFixed function converts the number to string.
x = num.toFixed(2);
console.log(x, typeof x);

// To get 2 places totally (including before the decimal).
x = num.toPrecision(2);
console.log(x, typeof x);

x = num.toExponential(2);
console.log(x, typeof x);

x = num.toLocaleString('en-US');
console.log(x, typeof x);

console.log(num);
x = num.valueOf();
console.log(x);

// Maximum possible value of Number data type
console.log(Number.MAX_VALUE);

// Minimum possible value of Number data type
console.log(Number.MIN_VALUE);
