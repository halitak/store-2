import { PRODUCTS } from './data';
import Template from "./template";

export default class List extends Template {
  static initialState = {
    PRODUCTS,
  };
  constructor(){
    super();
    console.log(this.state);
  }
}
