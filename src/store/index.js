import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';

Vue.use(Vuex);

const state = {
  cartCoordinate: {}, // 购物动画起始dom对象
  addCount: 1 // 监听点击加入购物车
};

export default new Vuex.Store({
  state,
  mutations
});
