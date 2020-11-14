import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {},
    errorMessage: ''
  },
  mutations: {
    getProducts (state, payload) {
      state.products = payload
    },
    getOneProduct (state, payload) {
      state.product = payload
    },
    addProduct (state, payload) {
      state.products.push(payload)
    },
    deleteProduct (state, id) {
      state.products = state.products.map(el => {
        console.log('PRODUCT', el.id)
        if (el.id !== id) {
          console.log('PRODUCT', el.id)
          return el
        }
      })
    },
    errorMessage (state, msg) {
      state.errorMessage = msg
      setTimeout(() => {
        state.errorMessage = ''
      }, 5000)
    }
  },
  actions: {
    fetchProducts (context) {
      axios
        .get('/products')
        .then(({ data }) => {
          // console.log(data)
          context.commit('getProducts', data)
        })
        .catch(err => console.log(err))
    },
    fetchOne (context, { id }) {
      axios
        .get(`/products/${id}`)
        .then(({ data }) => {
          // console.log('fetchOne', data)
          context.commit('getOneProduct', data)
        })
        .catch(err => console.log(err))
    },
    addProduct (context, payload) {
      // console.log(payload)
      axios({
        url: '/add',
        method: 'POST',
        data: payload,
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('addProduct', data)
        })
        .catch(err => {
          context.commit('errorMessage', err.response.data.msg)
        })
    },
    deleteProduct (context, id) {
      axios({
        url: `/delete/${id}`,
        method: 'DELETE',
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(({ data }) => {
          console.log('RETURNING DELETE', data)
          this.fetchProducts()
        })
        .catch(err => {
          context.commit('errorMessage', err.response.data.msg)
        })
    },
    updateProduct (context, payload) {
      axios({
        url: `/update/${payload.id}`,
        method: 'PUT',
        data: payload,
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then((data) => {
          context.commit('addProduct', data)
        })
        .catch(err => {
          // console.log('=====ERROR Update======', err.response.data)
          context.commit('errorMessage', err.response.data.msg)
        })
    }
  },
  modules: {
  }
})
