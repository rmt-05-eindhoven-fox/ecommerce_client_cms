import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'

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
    successToast (state, message) {
      Vue.$vToastify.success(message)
    },
    errToast (state, message) {
      Vue.$vToastify.error(message)
    },
    userLogin (context, payload) {
      const { email, password } = payload
      return axios({
        method: 'post',
        url: '/user/login',
        data: {
          email, password
        }
      })
    },

    fetchProducts () {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: '/product',
        method: 'get',
        headers: {
          access_token: accessToken
        }

      })
    },

    fetchOneProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        method: 'get',
        url: `/product/${payload}`,
        headers: {
          access_token: accessToken
        }
      })
    },

    updateProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      const { id, name, imageUrl, price, stock } = payload
      return axios({
        method: 'put',
        url: `/product/${id}`,
        headers: {
          access_token: accessToken
        },
        data: {
          name,
          image_url: imageUrl,
          price,
          stock
        }
      })
    },

    deleteProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        method: 'delete',
        url: `/product/${payload}`,
        headers: {
          access_token: accessToken
        }
      })
    }
  },
  modules: {
  }
})
