// # setInterval

// const time = 1000;
// setInterval((text) => {
//   console.log(text);
// }, time, `Print this text every ${time} second`);

let i = 0;
const until10 = setInterval(callbackFn, 300);

function callbackFn() {
  console.log(i++);
  if (i > 10) {
    clearInterval(until10);
    console.log('This is the end');
  }
}