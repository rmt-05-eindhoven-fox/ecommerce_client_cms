import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    error: ''
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    errorHandling (state, data) {
      state.error = data
    }
  },
  actions: {
    fetchAll (context) {
      axios({
        method: 'GET',
        url: '/ecommerce',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then((res) => {
          context.commit('setProducts', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchProductById (context, id) {
      return axios({
        method: 'GET',
        url: '/ecommerce/' + id,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    addProduct (context, payload) {
      return axios({
        method: 'POST',
        url: '/ecommerce',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    editProduct (context, payload) {
      return axios({
        method: 'PUT',
        url: '/ecommerce/' + payload.id,
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    deleted (context, id) {
      return axios({
        method: 'DELETE',
        url: '/ecommerce/' + id,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    errorHandling (context, error) {
      context.commit('errorHandling', error)
    }
  },
  modules: {
  }
})
