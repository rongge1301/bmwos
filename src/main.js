// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import $ from 'jquery'
import '../static/css/bootstrap.mindb.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'ztree'
import axios from 'axios'
import Vuex from 'vuex'
import store from './store/store'

Vue.use(Vuex);


Vue.use(ElementUI)

Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
