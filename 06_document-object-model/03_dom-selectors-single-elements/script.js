// Get element by Id - document.getElementById
console.log(document.getElementById('app-title'));

// Get id, className of selected element.
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute('id'));

// Set Attributes
// document.getElementById('app-title').id = 'new-id';
document.getElementById('app-title').title = 'Shopping List';
console.log(document.getElementById('app-title').title);

// Set Attributes using setAttribute method. This method accepts two arguments:
// First one is the which attribute you are setting (i.e., either class or, id)
// Second one is the you are setting to what attribute (i.e., attribute name)
document.getElementById('app-title').setAttribute('class', 'title');

// Storing the element into a variable.
const object = document.getElementById('app-title');

// Get/Change Content
console.log(object.textContent);
object.textContent = 'Hello World!';
// The same can be achieved using innerText
object.innerText = 'Hello';

// We can also pass HTML content using innerHTML
object.innerHTML = '<strong>Hello, World!</strong>';

// Change Styles
// Changing the color to 'red'
object.style.color = 'red';

// Chaning the 'background-color' to 'black'
// In CSS, we have the 'background-color' but in JavaScript, we'll refer the
// same property as 'backgroundColor' (Just different naming style)
// In CSS, we are using snake casing but in JavaScript, we'll use camel case.
object.style.backgroundColor = 'black';

// Set the 'padding' and 'border-radius' to '10px'
object.style.padding = '10px';
object.style.borderRadius = '10px';

// Select any query based on HTML tags - document.querySelector()
// It will select one (first h1 tag)
console.log(document.querySelector('h1'));

// Select the 'app-title' id
console.log(document.querySelector('#app-title'));

// Select the container class
console.log(document.querySelector('.container'));

// Select the 'input[type='text']' field
console.log(document.querySelector('input[type="text"]'));

console.log(document.querySelector('li:nth-child(2)'));

// Print the innerText of 'second child of li'
console.log(document.querySelector('li:nth-child(2)').innerText);

// Select the 'second child of li' and then change the innerText and also set the color
const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'red';

// Select all HTML tags - document.querySelectorAll()
const listItems = document.querySelectorAll('li');
console.log(listItems, typeof listItems);

// Use these methods on other elements
// First select the 'ul' and then apply querySelector on 'li'
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'red';
