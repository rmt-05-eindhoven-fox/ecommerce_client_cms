import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Product: []
  },
  mutations: {
    setProduct (state, payload) {
      state.Product = payload
    }
  },
  actions: {
    login (context, payload) {
      return axios
        .post('/login', {
          email: payload.email,
          password: payload.password
        })
    },

    fetchProduct (context) {
      axios
        .get('/product', {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          context.commit('setProduct', data)
        })
        .catch(err => console.log(err))
    },

    addProduct (context, payload) {
      axios
        .post('/product', {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        },
        {
          headers: { access_token: localStorage.getItem('access_token') }
        })
        .then(({ data }) => {
          router.push('/Dashboard')
        })
        .catch(err => console.log(err))
    },

    fetchProductById (context, payload) {
      return axios
        .get(`/product/${payload.id}`, {
          headers: { access_token: localStorage.getItem('access_token') }
        })
    },

    edit (context, payload) {
      axios
        .put(`/product/${payload.id}`, {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        },
        {
          headers: { access_token: localStorage.getItem('access_token') }
        })
        .then(({ data }) => {
          router.push({ name: 'ListProduct' })
        })
        .catch(err => console.log(err))
    },

    deletep (context, payload) {
      return axios
        .delete(`/product/${payload.id}`, {
          headers: { access_token: localStorage.getItem('access_token') }
        })
    }
  },
  modules: {
  }
})
