import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios/axios.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    app: 'CMS',
    products: [],
    isLoad: false
  },
  mutations: {
    setProduct (state, payload) {
      state.products = payload
    },
    doneLoad (state) {
      state.isLoad = true
    }
  },
  actions: {
    getProduct (context) {
      const token = localStorage.getItem('token')
      axios({
        url: '/product',
        method: 'get',
        headers: {
          token
        }
      })
        .then(({ data }) => {
          // this.products = data
          context.commit('setProduct', data)
        })
        .catch((err) => {
          console.log(err.message)
        })
        .finally(() => {
          context.commit('doneLoad')
        })
    },
    deleteProduct (context, payload) {
      return axios({
        url: `/product/${payload.id}`,
        method: 'delete',
        headers: {
          token: payload.token
        }
      })
    },
    userLogin (context, payload) {
      // console.log(payload)
      return axios({
        url: '/login',
        method: 'post',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    }
  },
  modules: {
  }
})
