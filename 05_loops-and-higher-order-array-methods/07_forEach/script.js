const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// Works similarly as square bracket '[]'
console.log(socials.at(0));

// View Prototype Chain of Array
console.log(socials.__proto__);

// Long Form (Using Standard Form of Function)
socials.forEach(function (item) {
  console.log(item);
});

// Short Form (Using Array Function)
socials.forEach((item) => console.log(item));

// We can also pass in the index and original array
// First pass item, then index and then arr (original array) [Here, order matters.]
socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// Using a named function
function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

// Array of objects
const socialObjs = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'Linkedin', url: 'https://linkedin.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
];

socialObjs.forEach((item) => console.log(item.url));

function printSocials(social) {
  console.log(`Name: ${social.name}, URL: ${social.url}`);
}
socialObjs.forEach(printSocials);
