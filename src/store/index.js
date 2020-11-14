import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    listProducts (state, payload) {
      state.products = payload
    }
  },
  actions: {
    login (context, payload) {
      return axios({
        url: '/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    fetchProducts (context) {
      axios({
        url: '/products',
        method: 'GET',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          context.commit('listProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      const token = localStorage.getItem('token')
      return axios({
        url: '/products',
        method: 'POST',
        headers: { token },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
    },
    deleteProduct (context, payload) {
      axios({
        url: '/products/' + payload,
        method: 'DELETE',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(data => {
          console.log('Data Deleted!')
        })
        .catch(err => {
          console.log(err)
        })
    },
    editProduct (context, payload) {
      axios({
        url: '/products/' + payload.id,
        method: 'PUT',
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  },
})
