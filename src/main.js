// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router/router';
import VueResource from 'vue-resource';
import './Common/stylus/index.styl';
import store from './store/';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app');
