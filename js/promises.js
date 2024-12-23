const promise = new Promise((resolve, reject) => {
  const condition = true;
  if (condition) {
    setTimeout(() => {
      resolve({ name: 'Leonard', lastname: 'Lurdes' });
    }, 1000)
  } else {
    reject({ name: 'Leonard', lastname: 'Lurdes', error: 'não foi possível salvar objeto no db.' });
  }
})

let username = '';

// promise.then(result => {
//   result.age = 25;
//   username = result.name
// }, rejected => console.log(rejected))
//   .finally(() => {
//     console.log('Término da Promise')
//     console.log(username);
//   })

// console.log(promise);

// Promise.all()

const login = new Promise(resolve => {
  setTimeout(() => {
    resolve('Usuário logado.')
  }, 1000)
})

const dados = new Promise(resolve => {
  setTimeout(() => {
    resolve('Dados carregados.')
  }, 1500)
})

// const allLoaded = Promise.all([login, dados]);
const allLoaded = Promise.race([login, dados]);

allLoaded.then(result => console.log(result));
