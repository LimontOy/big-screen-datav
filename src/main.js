import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 引入全局css
import './assets/scss/style.scss';
import './assets/scss/swiper.min.scss';
import './assets/scss/visual.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
