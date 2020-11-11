import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0,
    products: ''
  },
  actions: {
    fetchProducts ({ commit }, accessToken) {
      axios({
        method: 'GET',
        url: '/products',
        headers: { access_token: accessToken }
      })
        .then(response => {
          commit('SET_PRODUCTS', response.data)
        })
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    SET_PRODUCTS (state, products) {
      state.products = products
    }
  }
})
