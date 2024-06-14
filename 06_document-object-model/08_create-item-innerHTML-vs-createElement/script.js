// Create a new item using DOM
// Approach 1: Not Recommended
function createListItem(item) {
  const li = document.createElement('li');
  li.innerHTML = `${item}
  <button class='remove-item btn-link text-red'>
    <i class='fa-solid fa-xmark'></i>
  </button>`;
  document.querySelector('.items').appendChild(li);
}

// Approach 2: Recommended
function createNewItem(item) {
  const li = document.createElement('li');
  const text = document.createTextNode(item);
  li.appendChild(text);
  const button = document.createElement('button');
  button.className = 'remove-item btn-link text-red';
  const icon = document.createElement('i');
  // console.log(button);
  icon.className = 'fa-solid fa-xmark';
  button.appendChild(icon);
  li.appendChild(button);
  document.querySelector('.items').appendChild(li);
}

createListItem('Eggs');
createNewItem('Cheese');
