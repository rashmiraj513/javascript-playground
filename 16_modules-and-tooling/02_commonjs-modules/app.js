const { message, capitalizeWords, makeMoney } = require('./utils');
const Person = require('./Person');

console.log(message.text);
console.log(capitalizeWords('hello world from rashmi raj'));
console.log(makeMoney(400));

const person = new Person('Rashmi Raj', 24);
person.greet();
