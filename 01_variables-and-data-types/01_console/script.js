// This code demonstrates various console methods for debugging and logging in JavaScript.

console.log(100);

console.log('Hello, World!');

console.log(20, 'Hello', true);

const x = 100;
console.log(x);

// Logs an error message
console.error('Alert');

// Logs a warning message
console.warn('Warning');

// Displays data as a table
console.table({ name: 'Rashmi Raj', email: 'rashmiraj7877@gmail.com' });

// Begins a new inline group in the console
console.group('Simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
// Ends the inline group
console.groupEnd();

// Defines custom CSS styles for console output
const styles = 'padding: 10px; background-color: white; color: red';
// Logs 'Hello, World!' with custom styles
console.log('%cHello, World!', styles);
