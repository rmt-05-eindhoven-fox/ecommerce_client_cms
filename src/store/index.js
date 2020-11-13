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
    fetchProducts (context) {
      axios
        .get('/products')
        .then(({ data }) => {
          context.commit('setProducts', data)
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
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        },
        headers: {
          token
        }
      })
    },
    putProduct (context, payload) {
      const token = localStorage.getItem('token')
      return axios({
        url: '/products/' + payload.id,
        method: 'PUT',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price
        },
        headers: {
          token
        }
      })
    },
    fetchProductById (context, payload) {
      const id = payload
      return axios({
        url: `/products/${id}`,
        method: 'GET'
      })
    },
    deleteProduct (context, payload) {
      const id = payload
      const token = localStorage.getItem('token')
      return axios({
        url: `/products/${id}`,
        method: 'DELETE',
        headers: {
          token
        }
      })
    }
  },
  modules: {
  }
})
