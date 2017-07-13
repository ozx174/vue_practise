import {
  ADD_CART
} from './mutation-types.js';

export default {
  // 记录点击购买位置的坐标
  [ADD_CART](state, cartCoordinate) { // cartCoordinate是坐标对象
    state.cartCoordinate = cartCoordinate;
    state.addCount++;
  }
};
