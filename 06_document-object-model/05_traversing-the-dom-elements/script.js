// Get Child Elements
let object = document.querySelector('.parent').children;

// Print the children and type of children
console.log(object, typeof object);

// Printing the second child
console.log(object[1]);

// Changing the innerText and color of second child
object[1].innerText = 'Child Two';
object[1].style.color = 'red';

// Changing the innerText of first and third child
object[0].innerText = 'Child One';
object[2].innerText = 'Child Three';

// Get parent from a child
const child = document.querySelector('.child');
object = child.parentElement;

object.style.border = '1px solid #ccc';
object.style.padding = '10px';

// Get Sibling elements
const secondItem = document.querySelector('.child:nth-child(2)');
console.log(secondItem);

// Get next element sibling
object = secondItem.nextElementSibling;
console.log(object);

// Change the color of next and previous element sibling
secondItem.nextElementSibling.style.color = 'green';
secondItem.previousElementSibling.style.color = 'orange';
