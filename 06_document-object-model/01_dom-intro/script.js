// Global window object
console.log(window);

// The document object is part of the window object
console.dir(window.document);

// We can access DOM elements directly with properties
console.log(document.body);

// This returns a HTMLCollection which is like an array but not an array.
console.log(document.links);

// Access links by indexing
console.log(document.links[0]);

// We can set properties of elements
// Comment this line to see the effect of methods to select the elements more directly.
// document.body.innerHTML = '<h1>Hello from body</h1>';

// The document object has a ton of methods. One is `document.write()`, which will write something to the document
document.write('Hello from JS');

// Methods to select elements more directly
const main = document.getElementById('main');
// console.log(main);
document.getElementById('main').innerHTML = '<h1>Hello from main</h1>';

document.querySelector('#main h1').innerText = 'Hello';
