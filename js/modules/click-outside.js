export default function clickOutside(element, events, callbackFn) {
  const html = document.documentElement
  const outside = 'data-outside';

  if (!element.hasAttribute(outside)) {
    events.forEach(ev => {
      html.addEventListener(ev, handleOutsideClick);
      element.setAttribute(outside, '');
    })
  }

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      callbackFn();
      events.forEach(ev => {
        html.removeEventListener(ev, handleOutsideClick);
      })
    }
  }
}