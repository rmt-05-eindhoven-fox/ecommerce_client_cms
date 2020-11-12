import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/config/axios.js'
import router from '../router'

Vue.use(Vuex)

// const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJnYWJyaWVsQGFkbWluLmNvbSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTYwNTA1MTI0M30.fXMXsH_59jP9OsOTQuaYFOk6bdxqH24JYJ3eYG0HqT4'

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
      return axios({
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
          localStorage.setItem('access_token', accessToken)
          router.push({ name: 'Home' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    logout (context) {
      localStorage.removeItem('access_token')
      router.push({ name: 'Login' })
    }
  },
  modules: {
  }
})
