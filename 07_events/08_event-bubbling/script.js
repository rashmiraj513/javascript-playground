const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');

const form = document.querySelector('form');

button.addEventListener('click', (e) => {
  alert('Button was clicked!');
  // Used when we don't want to bubble up the event to the top.
  e.stopPropagation();

  // Used when we don't want one event to trigger multiple events.
  // e.stopImmediatePropagation();
});

div.addEventListener('click', () => {
  alert('Div was clicked!');
});

form.addEventListener('click', () => {
  alert('Form was clicked!');
});

document.body.addEventListener('click', () => {
  alert('Body was clicked!');
});
