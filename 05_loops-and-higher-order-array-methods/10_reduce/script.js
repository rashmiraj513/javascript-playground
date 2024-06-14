const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Add all numbers together using reduce and a standard function as callback function
// 0 denotes the starting value of `accumulator`
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum);

// Add all numbers together using reduce and an arrow function as callback function
// 0 denotes the starting value of `accumulator`
const sum2 = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum2);

// Using a for of loop to add all the numbers
const sum3 = () => {
  let acc = 0;
  for (const curr of numbers) {
    acc += curr;
  }
  return acc;
};
console.log(sum3(numbers));

// Shopping Cart Examples (Objects)
const cart = [
  { id: 1, name: 'Product 1', price: 130 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 200 },
];

const total = cart.reduce(function (acc, product) {
  return acc + product.price;
}, 0);
console.log(total);

// Shorthand using an arrow function
const total2 = cart.reduce((acc, product) => acc + product.price, 0);
console.log(total2);
