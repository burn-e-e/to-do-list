const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addItem(input.value);
  input.value = '';
});

function addItem(text) {
  const item = document.createElement('li');
  item.innerText = text;
  item.addEventListener
}
