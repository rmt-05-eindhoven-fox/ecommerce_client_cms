import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    }
  },
  actions: {
    postLogin (context, payload) {
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
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      // console.log(payload)
      return axios({
        url: '/products',
        method: 'POST',
        headers: { token: localStorage.getItem('token') },
        data: {
          name: payload.name,
          imgUrl: payload.imgUrl,
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
        .then(data => console.log('Delete berhasil!!!'))
        .catch(err => console.log(err))
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
          imgUrl: payload.imgUrl,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(data => {
          console.log(data)
        })
        .catch(err => console.log(err))
    }
  },
  modules: {
  }
})
