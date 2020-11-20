import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: ''
  },
  mutations: {
    setProducts (state, data) {
      state.products = data
    },
    editProduct (state, payload) {
      state.product = payload
    }
  },
  actions: {
    login (context, payload) {
      return axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    addProduct (context, payload) {
      return axios({
        url: '/products',
        method: 'POST',
        data: {
          name: payload.name,
          price: payload.price,
          stock: payload.stock,
          image_url: payload.image_url
        },
        headers: {
          access_token: payload.token
        }
      })
    },
    fetchProducts (context, token) {
      axios({
        url: '/products',
        method: 'GET',
        headers: {
          access_token: token
        }
      })
        .then(({ data }) => {
          console.log(data.data)
          context.commit('setProducts', data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProductById (context, payload) {
      axios({
        url: '/products/' + payload.id,
        method: 'GET',
        headers: {
          access_token: payload.token
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('editProduct', data.data)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    updateProduct (context, payload) {
      return axios({
        url: '/products/' + payload.id,
        method: 'PUT',
        data: {
          name: payload.name,
          price: payload.price,
          stock: payload.stock,
          image_url: payload.image_url
        },
        headers: {
          access_token: payload.token
        }
      })
    },
    deleteProduct (context, payload) {
      return axios({
        url: '/products/' + payload.id,
        method: 'DELETE',
        headers: {
          access_token: payload.token
        }
      })
    }
  },
  modules: {
  }
})
