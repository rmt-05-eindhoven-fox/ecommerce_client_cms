import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
  },
  actions: {
    login (context, payload) {
      axios({
        url: '/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          const token = data.token
          localStorage.setItem('token', token)
          router.push('/')
          console.log('masuk')
        })
        .catch(err => {
          console.log(err, 'gak masuk')
        })
    },
    fetchProduct () {
      axios({
        url: '/products',
        method: 'GET'
      })
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    logout () {
      localStorage.clear()
      router.push('/login')
    }
  },
  modules: {
  }
})
