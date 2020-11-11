import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router/index'
import money from '../helpers/money'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Products
    products: [],

    // Categories
    categories: []
  },
  mutations: {
    setProducts (state, payload) {
      payload.forEach(el => {
        el.moneyFormat = money(el.price)
      })
      state.products = payload
    },
    setCategories (state, payload) {
      state.categories = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/loginAdmin',
        data: {
          email: payload.user.email_login,
          password: payload.user.password_login
        }
      })
        .then((result) => {
          const accessToken = result.data.access_token
          localStorage.setItem('access_token', accessToken)
          router.push({ name: 'Dashboard' })
        })
        .catch((err) => {
          console.log(err.response.data.msg)
        })
    },
    readProducts (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: accessToken
        }
      })
        .then((result) => {
          context.commit('setProducts', result.data)
        })
        .catch((err) => {
          console.log(err.response.data.msg)
        })
    },
    readProductById (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        method: 'GET',
        url: `/products/${+payload.id}`,
        headers: {
          access_token: accessToken
        }
      })
    },
    createProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: accessToken
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          description: payload.description,
          price: +payload.price,
          stock: +payload.stock,
          CategoryId: +payload.CategoryId
        }
      })
        .then((result) => {
          router.push({ name: 'Dashboard' })
        })
        .catch((err) => {
          console.log(err.response.data.msg)
        })
    },
    editProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'PUT',
        url: `/products/${+payload.id}`,
        headers: {
          access_token: accessToken
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          description: payload.description,
          price: +payload.price,
          stock: +payload.stock,
          CategoryId: +payload.CategoryId
        }
      })
        .then((result) => {
          router.push({ name: 'Dashboard' })
        })
        .catch((err) => {
          console.log(err.response.data.msg)
        })
    },
    deleteProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        url: `/products/${+payload}`,
        method: 'DELETE',
        headers: {
          access_token: accessToken
        }
      })
        .then((result) => {
          context.dispatch('readProducts')
        })
        .catch((err) => {
          console.log(err.response.data.msg)
        })
    },
    readCategories (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: '/categories',
        headers: {
          access_token: accessToken
        }
      })
        .then((result) => {
          context.commit('setCategories', result.data)
        })
        .catch((err) => {
          console.log(err.response.data.msg)
        })
    },
    createCategory (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'POST',
        url: '/categories',
        headers: {
          access_token: accessToken
        },
        data: {
          name: payload.name
        }
      })
        .then((result) => {
          context.dispatch('readCategories')
        })
        .catch((err) => {
          console.log(err.response.data.msg)
        })
    },
    deleteCategory (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        url: `/categories/${+payload}`,
        method: 'DELETE',
        headers: {
          access_token: accessToken
        }
      })
        .then((result) => {
          context.dispatch('readCategories')
        })
        .catch((err) => {
          console.log(err.response.data.msg)
        })
    }
  },
  modules: {
  },
  getters: {
    filteredProductsByCategory: (state) => (selectedCategory) => {
      return state.products.filter(product => {
        return product.CategoryId === selectedCategory
      })
    }
  }
})
