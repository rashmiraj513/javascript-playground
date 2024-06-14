const form = document.getElementById('item-form');

function onSubmit(e) {
  e.preventDefault();

  // Get Value with value attribute
  const item = document.getElementById('item-input').value;
  const priority = document.getElementById('priority-input').value;

  if (item === '' || priority === 0) {
    alert('Please fill in all fields');
    return;
  }

  console.log(item, priority);
}

// Using the FormData object
function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);
  console.log(formData);

  // Get Individual Value
  const item = formData.get('item');
  const priority = formData.get('priority');
  console.log(item, priority);

  // Get al entried as an Iterator
  const entries = formData.entries();
  console.log(entries);

  // Loop through entries
  for (let entry of entries) {
    console.log(entry[1]);
  }
}

// Event Listeners
// form.addEventListener('submit', onSubmit);
form.addEventListener('submit', onSubmit2);
