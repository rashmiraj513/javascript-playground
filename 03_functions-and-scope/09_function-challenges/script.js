// Challenge 1
const getCelsius = (farenheit) => {
  const celsius = ((farenheit - 32) * 5) / 9;
  return Math.round(celsius);
};
console.log(`The temperature is ${getCelsius(32)} \xB0C.`);

// Challenge 2
function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return { min, max };
}
console.log(minMax([55, 32, 43, 54, 65, 76, 87, 98, 109]));

// Challenge 3
((length, width) => {
  const area = length * width;
  const output = `The area of a rectangle with a length of ${length} and a width ${width} is ${area}.`;
  console.log(output);
})(10, 5);
