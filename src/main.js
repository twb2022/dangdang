import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Vant from 'vant';
import 'vant/lib/index.css';
import jquery from "jquery";
Vue.prototype.$ = jquery;
// import './assets/css/index.css'
// import './assets/css/order.css'
Vue.use(VueRouter);
Vue.use(Vant)

Vue.config.productionTip = false
import router from './assets/js/router.js';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

