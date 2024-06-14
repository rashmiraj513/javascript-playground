// remove() Method
function removeClearButton() {
  const clearBtn = document.querySelector('#clear');
  clearBtn.remove();
}

// removeChild() Method
function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');
  ul.removeChild(li);
}

// Other Examples of removeChild
function removeItem(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber})`);
  ul.removeChild(li);
}

// remove item with zero indexing
function removeItem2(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber - 1})`);
  ul.removeChild(li);
}

// remove item with querySelectorAll Method
function removeItem3(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li');
  li[itemNumber - 1].remove();
}

// remove item with arrow function and querySelectorAll Method
const removeItem4 = (itemNumber) =>
  document.querySelectorAll('li')[itemNumber - 1].remove();

removeClearButton();
removeFirstItem();
removeItem(2);
removeItem2(2);
removeItem3(2);
removeItem4(2);
