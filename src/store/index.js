import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    fetchProducts (state, result) {
      state.products = result.data.result
    }
  },
  actions: {
    fetchProducts (context) {
      axios({
        url: '/products',
        method: 'GET',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(result => {
          context.commit('fetchProducts', result)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProductById (context, id) {
      return axios({
        url: '/products/' + id,
        method: 'GET',
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    editProduct (context, payload) {
      return axios({
        url: '/products/' + payload.id,
        method: 'PUT',
        data: payload.productData,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    addProduct (context, payload) {
      return axios({
        url: '/products',
        method: 'POST',
        headers: {
          token: localStorage.getItem('token')
        },
        data: payload
      })
    },
    deleteProduct (context, id) {
      return axios({
        url: '/products/' + id,
        method: 'DELETE',
        headers: {
          token: localStorage.getItem('token')
        }
      })
    }
  },
  modules: {
  }
})
