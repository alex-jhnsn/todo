const data = [
  {
    "id": 1,
    "isComplete": false,
    "value": "Make to do website"
  },
  {
    "id": 2,
    "isComplete": false,
    "value": "Release meaa-4"
  },
  {
    "id": 3,
    "isComplete": false,
    "value": "Complete qa"
  },
  {
    "id": 4,
    "isComplete": true,
    "value": "Go get a coffee"
  },
];

function getLocalData () {
  return new Promise(resolve => {
    resolve(data);
  });
}

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
  </fieldset>`
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
};