// Select all HTML tags - document.querySelectorAll() - Returns a NodeList
// NodeList is an array like structure, much like HTMLCollection.
// One difference between NodeList and HTMLCollection is that higher order methods
// can be applied on NodeList but not on HTMLCollection.

const listItems = document.querySelectorAll('.item');
console.log(listItems, typeof listItems);
console.log(listItems[0]);

// Since, listItems is a NodeList so, style can be directly applied on this.
// However, it can be applied on the specific element of the NodeList.
// listItems.style.color = 'red'; // Raise error

listItems[0].style.color = 'red';

// forEach method can be used to apply styling on all selected elements.
listItems.forEach((item, index) => {
  item.style.color = 'red';

  // When the index is 1 then remove the item.
  if (index == 1) {
    item.remove();
  }

  if (index == 0) {
    item.innerHTML = `Oranges
    <button class='remove-item btn-link text-red'>
      <i class='fa-solid fa-xmark'></i>
    </button>`;
  }
});

// Select element by class name - getElementsByClassName() - Returns an HTMLCollection
const listItems2 = document.getElementsByClassName('item');
console.log(listItems2[2].innerText);

// Converting the HTMLCollection to Array
const listItemsArray = Array.from(listItems2);

// Now, print the innerText of each selected item
listItemsArray.forEach((item) => console.log(item.innerText));

// Select element by tag name - getElementByTagname()
const listItems3 = document.getElementsByTagName('li');
console.log(listItems3[0].innerText);
