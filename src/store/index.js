import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/config/axios.js'
import router from '../router'

import Swal from 'sweetalert2'

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
    fetchAllProducts (context) {
      const accessToken = localStorage.getItem('access_token')
      return axios
        .get('products', {
          headers: {
            access_token: accessToken
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
      const accessToken = localStorage.getItem('access_token')
      axios({
        url: 'products',
        method: 'POST',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          category: payload.category,
          price: payload.price,
          stock: payload.stock
        },
        headers: {
          access_token: accessToken
        }
      })
        .then(() => {
          router.push({ name: 'Home' })
        })
        .catch(err => {
          const error = { error: err.response.data.error }
          Swal.fire('Oops...', `${error.error}`, 'error')
        })
    },
    getProductById (context, id) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: `products/${id}`,
        method: 'GET',
        headers: {
          access_token: accessToken
        }
      })
    },
    editProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: `products/${payload.id}`,
        method: 'PUT',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          category: payload.category,
          price: payload.price,
          stock: payload.stock
        },
        headers: {
          access_token: accessToken
        }
      })
        .then(() => {
          // this.$store.dispatch('fetchAllProducts')
          // this.$router.push({ name: 'Home' })
        })
        .catch(err => {
          const error = { error: err.response.data.error }
          Swal.fire('Oops...', `${error.error}`, 'error')
        })
    },
    deleteProduct (context, id) {
      const accessToken = localStorage.getItem('access_token')
      return axios
        .delete(`products/${id}`, {
          headers: {
            access_token: accessToken
          }
        })
    },
    login (context, payload) {
      return axios({
        url: 'users/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          const accessToken = data.access_token
          const email = data.userEmail
          localStorage.setItem('access_token', accessToken)
          localStorage.setItem('email', email)
          router.push({ name: 'Home' })
        })
        .catch(err => {
          console.log(err)
          Swal.fire('Oops...', 'Wrong email/password', 'error')
        })
    },
    logout (context) {
      // router.push({ name: 'Login' })
      //   .catch(error => {
      //     console.info(error.message)
      //   })
      localStorage.removeItem('access_token')
    }
  },
  modules: {
  }
})
