// Aula 0606 | async / await

async function getData() {
  const promiseData = fetch('../data.json')
  const promiseCustomers = fetch('../customers.json')

  const jsonData = await (await promiseData).json();
  const jsonCustomers = await (await promiseCustomers).json();

  document.body.innerText = `${jsonData.class} & ${jsonCustomers.name}`;
}
getData();
