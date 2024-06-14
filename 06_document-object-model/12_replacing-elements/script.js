// replaceWith() Method
function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child');

  const li = document.createElement('li');
  li.textContent = 'Replaced First';

  firstItem.replaceWith(li);
}

// OuterHTML Property
function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2');
  secondItem.outerHTML = '<li>Replaced Second</li>';
}

// Replace All Items
function replaceAllItems() {
  const list = document.querySelectorAll('li');

  // list.forEach((item, index) => {
  //   item.outerHTML = '<li>Replace All</li>';
  //   if (index === 1) {
  //     item.innerHTML = 'Second Item';
  //   } else {
  //     item.innerHTML = 'Replace All';
  //   }
  // });

  // Shorthand for the above block
  list.forEach((item, index) => {
    item.outerHTML = index === 1 ? '<li>Second Item</li>' : '<li>Item</li>';
  });
}

// replaceChild() Method
// Just like insertBefore() method, this method also get called on the parent element.
// It accepts two arguments: first argument is the new element and the second one is the
// old element which we are replacing.
function replaceChildHeading() {
  const header = document.querySelector('header');
  const h1 = document.querySelector('header h1');

  const h2 = document.createElement('h2');
  h2.id = 'app-title';
  h2.textContent = 'Shopping List Heading';
  header.replaceChild(h2, h1);
}

replaceFirstItem();
replaceSecondItem();
replaceAllItems();
replaceChildHeading();
