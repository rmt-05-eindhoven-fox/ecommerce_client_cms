import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  Swal,
  render: h => h(App)
}).$mount('#app')
