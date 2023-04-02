import Template from './template';

export default class Basket extends Template {
  static initialState = {
    get basket() {
      return [];
    },
    set basket(pkList) {
      Object.assign(this.basket, pkList);
    },
  };
  constructor() {
    super();
  }
}
