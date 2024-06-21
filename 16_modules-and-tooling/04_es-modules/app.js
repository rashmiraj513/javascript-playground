// Adding extension is necessary here.
import { capitalizedWords, makeMoney } from './modules/utils.js';
import Person from './modules/Person.js';

console.log(capitalizedWords('hello from eS module section'));
console.log(makeMoney(300));

const person = new Person('Rashmi Raj', 24);
person.greet();
