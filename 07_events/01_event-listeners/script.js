// Events - Actions or, occurences that happen in the system that you are
// programming, which the system tells you about so your code can react to them.
// Some examples of Events are:
// 1. Clicking on an element
// 2. Typing into an text field
// 3. Hovering over an element
// 4. Submitting a form
// 5. Closing a window
// 6. Dragging an element
// 7. Resizing an element etc

// We can add events using multiple ways:
// 1. In HTML: We can also add events in HTML code but this is never recommended.
// 2. Using onClick keyword after selecting an element - May
// not work in case of multiple events on the same element
// 3. Using addEventListener Method - Always recommended

const clearBtn = document.querySelector('#clear');
console.log(clearBtn);

function onClear() {
  // console.log('Button Clicked!');
  const itemList = document.querySelector('ul');
  const items = document.querySelectorAll('li');

  // One way to remove all the elements
  // itemList.innerHTML = '';

  // Second way to remove all the elements
  // items.forEach((item) => item.remove());

  // Third way to remove all the elements
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// JavaScript Event Listener
clearBtn.onclick = function () {
  alert('Clear Items');
};

clearBtn.onclick = function () {
  console.log('Clear Items');
};

// addEventListener()
clearBtn.addEventListener('click', () => alert('Clear Items'));

// Use Named Function
clearBtn.addEventListener('click', onClear);

// removeEventListener()
setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// Fire off event from JS
setTimeout(() => clearBtn.click(), 5000);
