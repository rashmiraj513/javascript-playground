function insertAfter(newElement, existingElement) {
  existingElement.parentElement.insertBefore(
    newElement,
    existingElement.nextSibling
  );
}

// New Element to insert
const li = document.createElement('li');
li.textContent = 'Insert Me After!';

// Existing element to insert after
const firstItem = document.querySelector('li:first-child');

insertAfter(li, firstItem);
