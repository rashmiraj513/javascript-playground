const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Add an event listener on all items
listItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.target.remove();
  });
});

// Add a single event listener on the parent (Event Delegation)
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});

// Mouse over on the list items event
list.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.style.color = 'red';
  }
});
// Mouse Out the list items event
list.addEventListener('mouseout', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.style.color = 'black';
  }
});
