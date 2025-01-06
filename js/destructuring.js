function handleKeyboard({ shiftKey, key, keyCode }) {
  console.log(shiftKey);
  console.log(key);
  console.log(keyCode);
}

document.documentElement.addEventListener('keyup', handleKeyboard);