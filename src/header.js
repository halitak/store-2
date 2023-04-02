import Template from './template';

export default class Header extends Template {
  constructor(){
    super();
    const quantityDOM = document.querySelector(".js-count");
    quantityDOM.innerText = this.state.basket.length;
  }
}
