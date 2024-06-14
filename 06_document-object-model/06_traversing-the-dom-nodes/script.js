const parent = document.querySelector('.parent');
console.log(parent, typeof parent);

// childNodes returns all the nodes which contains whitespace (text) as well as comments.
let object = parent.childNodes;
console.log(object);

console.log(parent.childNodes[0].textContent);
console.log(parent.childNodes[0].nodeName);
console.log(parent.childNodes[3].textContent);
console.log(parent.childNodes[3].outerHTML);

object = parent.childNodes[3].innerText = 'Child One';
object = parent.childNodes[5].style.color = 'red';

object = parent.firstChild;
console.log(object);

object = parent.lastChild;
console.log(object);

parent.lastChild.textContent = 'Hello';

// Get Parent Node from child
const child = document.querySelector('.child');

object = child.parentNode;
console.log(object);

object = child.parentElement;
console.log(object);

child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

// Get Sibling Nodes
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem.nextSibling;
console.log(output);

output = secondItem.previousSibling;
console.log(output);
