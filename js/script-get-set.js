class Button {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }

  get element() {
    const type = this._elementType || 'button';
    const btnElement = document.createElement(type);
    btnElement.innerText = this.text;
    btnElement.style.color = this.color;
    return btnElement;
  }

  set element(value) {
    this._elementType = value;
  }
}
const blueBtn = new Button('Comprar', 'blue');
blueBtn.element = 'a'