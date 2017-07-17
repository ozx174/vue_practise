import Vue from 'vue';
import {formatDate} from 'Common/js/date';

Vue.filter('date', (value) => {
  let date = new Date(value);
  return formatDate(date, 'yyyy-MM-dd hh:ss');
});
