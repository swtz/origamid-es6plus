// Aula 0604 | JSON

fetch('../data.json')
  .then(response => response.text())
  .then(result => {
    const json = JSON.parse(result);
    json.forEach(item => {
      // console.log(item.aula);
    });
  });

const data = [
  {
    "name": "Leonardo",
    "age": 25,
    "birthday": "02/08/1999"
  },
  {
    "names": ["Laura", "Andressa", "Geovana"],
    "girls": true,
    "genre": null
  }
]

localStorage.data = JSON.stringify(data);

const dataParsed = JSON.parse(localStorage['data']);

console.log(dataParsed);
