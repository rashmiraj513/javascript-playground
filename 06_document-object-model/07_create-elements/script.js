// Create a div and insert it into the document
const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-id';
div.setAttribute('title', 'My Element');

// div.innerText = 'Hello';
// document.body.appendChild(div);

// Create a new text node and append it onto the div.
const text = document.createTextNode('Hello World');
// appendChild method appends the specified as the last element of the div.
div.appendChild(text);

// document.body.appendChild(div);
document.querySelector('ul').appendChild(div);
