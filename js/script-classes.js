class Button {
  constructor(text, background, marginLeft) {
    this.text = text;
    this.background = background;
    this.marginLeft = marginLeft;
  }
  static createBlueBtn(text) {
    return new Button(text, 'blue', 0);
  }
  static createRedBtn(text, marginLeft) {
    const value = `${marginLeft}px`;
    return new Button(text, 'red', value);
  }
  element() {
    const btnElement = document.createElement('button');
    btnElement.innerText = this.text;
    btnElement.style.background = this.background;
    btnElement.style.marginLeft = this.marginLeft;
    return btnElement;
  }
  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
  }
}
const blueBtn = Button.createBlueBtn('Comprar');
const redBtn = Button.createRedBtn('Vender', 10);
blueBtn.appendTo('body');
redBtn.appendTo('body');
