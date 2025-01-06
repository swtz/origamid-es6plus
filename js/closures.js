function contagem() {
  let total = 0;
  return function incremento() {
    total++;
    console.log(total);
  }
}

const activeIncrement = contagem();

activeIncrement();
activeIncrement();
activeIncrement();
activeIncrement();