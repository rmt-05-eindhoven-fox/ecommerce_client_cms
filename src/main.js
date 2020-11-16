import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vSelectMenu from 'v-selectmenu'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store'
import VueToastify from 'vue-toastify'

Vue.config.productionTip = false

Vue.use(vSelectMenu, {
  language: 'en',
  title: 'Category'
})

Vue.use(VueToastify, {
  errorDuration: 4000,
  successDuration: 2000,
  canPause: false
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
