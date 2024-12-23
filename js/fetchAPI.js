const cep = fetch('https://viacep.com.br/ws/01001000/json/');

cep.then(response => response.json()).then(body => {
  const content = document.querySelector('.content');
  Object.entries(body).forEach((item, index, array) => {
    const arr = array[index];
    const title = arr[0];
    const description = arr[1];
    console.log(title, description);

    const h2 = document.createElement('h2');
    const span = document.createElement('span');

    h2.innerText = title
    span.innerText = description

    content.appendChild(h2);
    content.appendChild(span);
  })
})
