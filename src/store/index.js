import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios.js'
import router from '../router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    productFetch (state, payload) {
      state.products = payload
    }
  },
  actions: {
    login (context, payload) {
      console.log(payload, 'payload<<<<')
      axios({
        url: '/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      }).then(res => {
        const token = res.data.token
        localStorage.setItem('token', token)
        router.push('/')
      }).catch(err => {
        console.log(err.response.data)
      })
    },
    fetchProduct (context) {
      const token = localStorage.getItem('token')
      axios({
        url: '/products',
        method: 'GET',
        headers: {
          token: token
        }
      }).then(({ data }) => {
        context.commit('productFetch', data)
      }).catch(err => {
        console.log(err)
      })
    },
    logout () {
      localStorage.removeItem('token')
      router.push('/login')
    },
    deleteData () {
      const token = localStorage.getItem('token')
      axios({
        url: '/products/1',
        method: 'DELETE',
        headers: {
          token
        }
      }).then(({ data }) => {
        router.push('/')
      }).catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
