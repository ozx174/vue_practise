/**
 * Created by acer on 2017/6/29.
 */
import App from '../App';
import store from 'components/store/store.vue';
import goods from 'components/goods/goods.vue';
import ratings from 'components/ratings/ratings.vue';
import seller from 'components/seller/seller.vue';

export default [{
  path: '/',
  component: App,
  children: [{
    path: '',
    redirect: '/store'
  }, {
    path: '/store',
    component: store,
    children: [{
      path: '',
      redirect: '/goods'
    }, {
      path: '/goods',
      component: goods
    }, {
      path: '/seller',
      component: seller
    }, {
      path: '/ratings',
      component: ratings
    }]
  }]
}];
