// Aula 0605 | API & HTTP

const url = "https://www.jw.org"

fetch(url)
  .then(response => response.text())
  .then(result => console.log(result))
