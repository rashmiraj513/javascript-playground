const myString = 'developer';

// Approach 1
const approachOne = myString.charAt(0).toUpperCase() + myString.substring(1);
console.log(approachOne);

// Approach 2
const approachTwo = myString[0].toUpperCase() + myString.substring(1);
console.log(approachTwo);

// Approach 3
const approachThree = `${myString[0].toUpperCase()}${myString.slice(1)}`;
console.log(approachThree);
