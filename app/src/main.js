// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Cookie from 'vue-cookie'
import VueMaterial from 'vue-material/dist/vue-material'
import Realtime from './realtime'
import Moment from 'vue-moment'
import 'vue-material/dist/vue-material.css'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(Cookie)
Vue.use(Moment)

Realtime.initialize()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
