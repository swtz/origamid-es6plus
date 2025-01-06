// #1
const liList = document.querySelectorAll('li');

for (const li of liList) {
  li.classList.add('active');
}

// #2
// const windowProps = Object.getOwnPropertyNames(window);
// for (const key in windowProps) {
//   const propName = windowProps[key];
//   console.log(window[propName]);
// }

for (const key in window) {
  console.log(`${key}: ${window[key]}`);
}
