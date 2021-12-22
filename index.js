import Vue from 'vue';
import App from './App.vue';
import utils from './utils/utils';

Vue.use(utils);

new Vue({
  el: '#app',
  render: h => h(App),
});
