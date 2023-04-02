export default class Store {
  #store = {};
  get state() {
    return this.#store;
  }
  set state(state) {
    Object.defineProperties(
      this.state,
      Object.getOwnPropertyDescriptors(state)
    );
    this.render();
  }
  subscribe = (Obj) => {
    this.state = Obj.initialState;
    Obj.prototype.state = this.state;
  };

  render() {
    if (this.state.PRODUCTS) {
      const list = Object.keys(this.state.PRODUCTS).map((key) => {
        const product = this.state.PRODUCTS[key];
        if (product.stock > 0) {
          return `
          <div class="flex flex-col border rounded">
            <div class="flex">
              <img src="${product.image}" alt="${
            product.name
          }" class="w-full rounded">
            </div>
            <div class="p-2 flex flex-col">
              <h3 class="text-xl">${product.name}</h3>
              <p class="text-base">${product.price}</p>
              ${
                product.stock < 5
                  ? `<p class="text-red-500 text-sm">tukeniyor</p>`
                  : ''
              }
            </div>
            <div class="flex flex-col p-2 mt-auto">
              <button class="py-2 active:bg-blue-600 active:ring-2 bg-blue-500 text-white rounded js-add-to-cart" data-pk="${key}">Sepete Ekle</button>
            </div>
          </div>
          `;
        }
      });
      const listDOM = document.querySelector('.js-list');
      listDOM.innerHTML = list.join('');
    }

    const quantityDOM = document.querySelector('.js-count');
    quantityDOM.innerText = this.state.basket?.length;
  }
}
