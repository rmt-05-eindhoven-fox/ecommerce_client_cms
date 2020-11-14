import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/config'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    /* setProducts (state, data) {
      state.products = data
    } */
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          console.log(data.access_token)
          localStorage.setItem('access_token', data.access_token)
          router.push('/')
        })
        .catch(err => {
          console.log(err.response.data.msg)
        })
    }
    /* fetchProducts (context) {
      axios
        .get('/products')
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    } */
  },
  modules: {
  }
})
