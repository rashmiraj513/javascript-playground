const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');

function onAddItemSubmit(e) {
  e.preventDefault();
  const item = itemInput.value;

  // Validate the item
  if (item === '') {
    alert('Please add an item!');
    return;
  }

  addItemToDom(item);
  addItemToLocalStorage(item);

  // After adding one item, call resetUI function.
  resetUI();

  // Clear the input field
  itemInput.value = '';
}

function addItemToDom(item) {
  // Create a new li element
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));
  console.log(li);
  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);
  itemList.appendChild(li);
}

function addItemToLocalStorage(item) {
  let itemsFromLocalStorage;

  // If local storage is empty then set it to a empty array
  // otherwise fetch everything from the local storage and store it.
  if (localStorage.getItem('items') === null) {
    itemsFromLocalStorage = [];
  } else {
    itemsFromLocalStorage = JSON.parse(localStorage.getItem('items'));
  }

  // Now, push the new item to local storage.
  itemsFromLocalStorage.push(item);

  // Convert it to string using stringify method
  localStorage.setItem('items', JSON.stringify(itemsFromLocalStorage));
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    e.target.parentElement.parentElement.remove();
  }

  // After removing one item, call resetUI function.
  resetUI();
}

function removeAllItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }

  // After removing all items, call resetUI function.
  resetUI();
}

function filterItems(e) {
  // Convert this to lowercase to compare effectively
  const text = e.target.value.toLowerCase();

  const items = itemList.querySelectorAll('li');
  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();
    if (itemName.indexOf(text) !== -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

function resetUI() {
  const items = itemList.querySelectorAll('li');
  if (items.length === 0) {
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
  }
}

// Event Listeners
itemForm.addEventListener('submit', onAddItemSubmit);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', removeAllItems);
window.addEventListener('load', resetUI);
itemFilter.addEventListener('input', filterItems);
