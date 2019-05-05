import Vue from 'vue'
import App from './App'
import router from './router'
import element from 'element-ui'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import VueJsonp from 'vue-jsonp'

Vue.use(VueAxios, Axios)


Vue.use(VueJsonp)

import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false;
Vue.use(element);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
