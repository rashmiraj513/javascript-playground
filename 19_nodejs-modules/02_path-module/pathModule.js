const path = require('path');

const myFilePath = 'subFolder/anotherFolder/index.js';

// basename() method
const base_1 = path.basename(myFilePath);
const base_2 = path.basename(myFilePath, '.js');

console.log(base_1);
console.log(base_2);

// extname() method - Extension Name
const ext = path.extname(myFilePath);
console.log(ext);

// dirname() method
const dir = path.dirname(myFilePath);
console.log(dir);

// join() method
const myPath = path.join('subFolder', 'anotherFolder', 'index.js');
console.log(myPath);

// resolve() method
const myPath2 = path.resolve('subFolder', 'anotherFolder', 'index.js');
console.log(myPath2);

// __dirname
console.log(__dirname);

// __filename
console.log(__filename);
