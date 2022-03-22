function getData () {
  return new Promise(resolve => {
    resolve(data);
  });
}

const data = [
  {
    "complete": false,
    "value": "Make to do website"
  },
  {
    "complete": false,
    "value": "Release meaa-4"
  },
  {
    "complete": false,
    "value": "Complete qa"
  },
  {
    "complete": false,
    "value": "Go get a coffee"
  },
];

getData()
  .then(data => {
    console.log(data);
  });