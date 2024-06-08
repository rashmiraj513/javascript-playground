let intro;

const fullName = 'Rashmi Raj';
const age = 24;
intro = 'Hello, My name is ' + fullName + ' and I am ' + age + ' years old.';
console.log(intro);

// Template Literal
// Inside template literal, we can also pass a valid experssion.
intro = `Hello, My name is ${fullName} and I am ${age} years old.`;
console.log(intro);

// String Properties and Methods
const str = 'Hello World!';
// const str = new String('Hello World!');	Internally

x = str.length;
console.log(x);

x = typeof str;
console.log(x);

// Access value using index
x = str[1];
console.log(x);

// Print prototype of string
x = str.__proto__;
console.log(x);

x = str.toUpperCase();
console.log(x);

x = str.toLowerCase();
console.log(x);

x = str.charAt(0);
console.log(x);

// The indexOf method is case-sensitive, and if the substring is not present then returns -1.
// If more than one occurrence of the substring is present then it returns the first occurrence of the substring.
x = str.indexOf('l');
console.log(x);

// The substring method extracts characters between two indices (positions), from a string, and returns the
// substring. If only one index is present then it extracts the substring starting from the first index to the end of the string.
// The substring method extracts characters from start to end (exclusive). It doesn't change the original string.
x = str.substring(1, 5);
console.log(x);

x = str.substring(1);
console.log(x);

// If the end is smaller than the start then both value get swapped.
x = str.substring(9, 2);
console.log(x);

x = str.slice(-11, -6);
console.log(x);

let st = '           Hello, World!';
x = st.trim();
console.log(x);

s = x.replace('World', 'John');
console.log(s);

x = s.includes('Hell');
console.log(x);

x = s.valueOf();
console.log(x);

// Split with space
x = s.split(' ');
console.log(x, typeof x);

// Split the string
x = s.split(' ');
console.log(x, typeof x);
