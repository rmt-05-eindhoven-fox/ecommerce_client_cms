import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {},
    access_token: ''
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
    }
  },
  actions: {
    login (context, payload) {
      axios({
        url: '/login',
        method: 'POST',
        data: payload
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.$router.push('/products')
        })
        .catch(err => console.log('=====ERROR======', err))
    },
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
          console.log('fetchOne', data)
          context.commit('getOneProduct', data)
        })
        .catch(err => console.log(err))
    },
    addProduct (context, payload) {
      console.log(payload)
      axios({
        url: '/add',
        method: 'POST',
        data: payload,
        headers: { access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImVtYWlsIjoienhjQG1haWwuY29tIiwiaWF0IjoxNjA1MDc4OTU4fQ.n0qivWM0DwGJ7kvcs3njleobnibR3lIppkshlIVLHGQ' }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('addProduct', data)
        })
        .catch(err => console.log('=====ERROR======', err))
    }
  },
  modules: {
  }
})
