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
    fetchProducts (context, accessToken) {
      axios({
        url: '/products',
        method: 'get',
        headers: {
          access_token: accessToken
        }
      })
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch(({ response }) => {
          console.log(response)
        })
    },
    addProduct (context, payload) {
      return axios({
        url: '/products',
        method: 'post',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          category: payload.category,
          price: payload.price,
          stock: payload.stock
        },
        headers: {
          access_token: payload.access_token
        }
      })
    },
    getProductById (context, payload) {
      return axios({
        url: `/products/${payload.id}`,
        method: 'get',
        headers: {
          access_token: payload.access_token
        }
      })
    },
    editProduct (context, payload) {
      // console.log(payload)
      return axios({
        url: `/products/${payload.id}`,
        method: 'put',
        headers: {
          access_token: payload.access_token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          category: payload.category,
          price: payload.price,
          stock: payload.stock
        }
      })
    },
    deleteProduct (context, payload) {
      // console.log(payload)
      return axios({
        url: `/products/${payload.id}`,
        method: 'DELETE',
        headers: {
          access_token: payload.access_token
        }
      })
    }
  },
  modules: {
  }
})
