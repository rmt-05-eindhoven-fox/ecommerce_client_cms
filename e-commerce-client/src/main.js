import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueToastify from 'vue-toastify'
import { VueSpinners } from '@saeris/vue-spinners'

Vue.use(VueSpinners)

Vue.use(VueToastify, {
  position: 'top-center',
  errorDuration: 3000,
  successDuration: 3000,
  hideProgressbar: true
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
