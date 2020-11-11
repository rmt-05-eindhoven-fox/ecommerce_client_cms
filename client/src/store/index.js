import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance.js'
import router from '../router'

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
    login (context, payload) {
      axios({
        url: '/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          const token = data.access_token
          const role = data.role

          localStorage.setItem('access_token', token)
          localStorage.setItem('role', role)
          router.push({ name: 'Dashboard' })
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    fetchProducts (context) {
      const token = localStorage.getItem('access_token')
      const role = localStorage.getItem('role')

      axios({
        url: '/products',
        method: 'GET',
        headers: {
          token,
          role
        }
      })
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    addProduct (context, payload) {
      const token = localStorage.getItem('access_token')
      const role = localStorage.getItem('role')

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
          token,
          role
        }
      })
    },
    editProduct (context, payload) {
      const token = localStorage.getItem('access_token')
      const role = localStorage.getItem('role')
      return axios({
        url: `/products/${payload.id}`,
        method: 'PUT',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        },
        headers: {
          token,
          role
        }
      })
    },
    deleteProduct (context, id) {
      const token = localStorage.getItem('access_token')
      const role = localStorage.getItem('role')
      console.log(id, '<<< ID DELETE PRODUCT DI VUEX')
      return axios({
        url: `/products/${id}`,
        method: 'DELETE',
        headers: {
          token,
          role
        }
      })
    },
    fetchProductById (context, id) {
      const token = localStorage.getItem('access_token')
      const role = localStorage.getItem('role')
      return axios({
        url: `/products/${id}`,
        method: 'GET',
        headers: {
          token,
          role
        }
      })
    }
  },
  modules: {
  }
})
