const message = {
  id: 1,
  text: 'Hello from utils.js',
};

// The same thing can be done with the following syntax:
// module.exports = {
//   id: 1,
//   text: 'Hello from utils.js',
// };

function capitalizeWords(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

function makeMoney(amount) {
  return `$${amount}`;
}

module.exports = { message, capitalizeWords, makeMoney };
