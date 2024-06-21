// Solution 1
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// Solution 2
// function reverseString(str) {
//   let reversedString = '';
//   for (let char of str) {
//     reversedString = char + reversedString;
//   }
//   return reversedString;
// }

// Solution 3
function reverseString(str) {
  return str
    .split('')
    .reduce((reverseString, char) => char + reverseString, '');
}
module.exports = reverseString;
