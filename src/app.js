import Store from './store';
import List from './list';
import Header from './header';
import Basket from './basket';

export default class App {
  constructor() {
    this.store = new Store();
    this.store.subscribe(List);
    this.store.subscribe(Header);
    this.store.subscribe(Basket);

    new List();
    new Header();
    new Basket();

    document.addEventListener('click', (event) => {
      if (event.target.classList.contains('js-add-to-cart')) {
        this.addToCart(event.target);
      }
    });
  }
  addToCart(elem) {
    this.store.state.PRODUCTS[elem.getAttribute('data-pk')].stock -= 1;
    this.store.state = {
      basket: [...this.store.state.basket, elem.getAttribute('data-pk')],
    };
  }
}
