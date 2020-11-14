import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios'
import route from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: false,
    errorMessage: [],
    products: []
  },
  mutations: {
    error (state, data) {
      state.error = true
      if (typeof (data) === 'string') state.errorMessage = [data]
      else state.errorMessage = data
    },
    hideError (state) {
      state.error = false
      state.errorMessage = []
    },
    getProducts (state, data) {
      state.products = data
    },
    deleteProduct (state, id) {
      const data = state.products.findIndex(el => el.id === id)
      state.products.splice(data, 1)
    }
  },
  actions: {
    login (context, data) {
      axios({
        url: '/login',
        data,
        method: 'post'
      })
        .then(({ data, status }) => {
          localStorage.setItem('access_token', data.access_token)
          route.push('/dashboard')
        })
        .catch(err => {
          context.commit('error', [err.response.data.msg])
        })
    },
    addProduct (context, data) {
      const headers = { access_token: localStorage.getItem('access_token') }
      axios({
        url: '/products',
        headers,
        data,
        method: 'post'
      }).then(({ data, status }) => {
        alert(JSON.stringify(data))
        route.push('/products')
      }).catch(({ response }) => {
        context.commit('error', response.data.msg)
      })
    },
    products (context) {
      const headers = { access_token: localStorage.getItem('access_token') }
      axios.get('/products', {
        headers
      }).then(({ data, status }) => {
        context.commit('getProducts', data)
      }).catch(err => {
        context.commit('error', err.response.data.msg)
      })
    },
    deleteProduct (context, id) {
      const headers = { access_token: localStorage.getItem('access_token') }
      axios.delete('/products/' + id, { headers })
        .then(({ data, status }) => {
          context.commit('deleteProduct', id)
        })
        .catch(err => {
          context.commit('error', err.response.data.msg)
        })
    },
    editProduct (context, data) {
      const { id, name, category, stock, price } = data
      const imageUrl = data.image_url
      const headers = { access_token: localStorage.getItem('access_token') }
      axios({
        url: '/products/' + id,
        headers,
        data: { image_url: imageUrl, name, category, stock, price },
        method: 'patch'
      }).then(({ data, status }) => {
        route.push({ name: 'Product list' })
      }).catch(err => {
        context.commit('error', err.response.data.msg)
      })
    }
  },
  modules: {
  },
  getters: {
    product: (state) => (id) => {
      const data = state.products.find(el => el.id === id)
      return data
    }
  }
})
