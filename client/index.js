function getData () {
  return fetch('http://127.0.0.1:5000/todo')
    .then(res => res.json())
    .then(data => {
      return data;
    });
}

function renderItem (id, isComplete, value) {
  return `<fieldset class="list-item" data-id="${id}" >
    <input type="checkbox" ${isComplete ? "checked" : ""} />
    <input type="text" value="${value}" />
  </fieldset>`;
}

window.onload = () => {
  const $todoContainer = document.querySelector('.todo-container');

  getData()
  .then(data => {
    var content = '';
    data.forEach(item => {
      content += renderItem(item.id, item.isComplete, item.value);
    });
    $todoContainer.innerHTML = content
  });

  $todoContainer.addEventListener('change', e => {
    console.log(e.target.value);

    if (e.target.type == 'checkbox')
      console.log('checkbox')
  });
};