import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload} from 'vant';
import axios from 'axios'
import $ from 'jquery'


Vue.prototype.$ = $;
Vue.use(Lazyload);
Vue.use(Vant);
Vue.prototype.$http=axios;  //全局注册xaios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
