import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0,
    products: []
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
        .catch(err => {
          console.log(err)
        })
    },
    addProduct ({ commit }, payload) {
      axios({
        method: 'POST',
        url: '/products',
        headers: { access_token: payload.accessToken },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(response => {
          console.log(response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct ({ commit }, payload) {
      axios({
        method: 'DELETE',
        url: `products/${payload.id}`,
        headers: { access_token: payload.accessToken }
      })
        .then(response => {
          console.log(response.data)
        })
        .catch(err => {
          console.log(err)
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
