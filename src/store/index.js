import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userEmail: '',
    products: [],
    categories: [],
    currentCategory: '',
    detailProduct: ''
  },
  mutations: {
    changeUserEmail (state, payload) {
      state.userEmail = payload
    },
    setProducts (state, payload) {
      state.products = payload
    },
    setCategories (state, payload) {
      state.categories = payload
    },
    changeCurrentCategory (state, payload) {
      state.currentCategory = payload
    },
    setProduct (state, payload) {
      state.detailProduct = payload
    }
  },
  actions: {
    fetchProducts (context) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        url: '/products',
        method: 'get',
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
    fetchCategories (context) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        url: '/categories',
        method: 'get',
        headers: {
          access_token: accessToken
        }
      })
        .then(({ data }) => {
          context.commit('setCategories', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: '/products',
        method: 'post',
        headers: {
          access_token: accessToken
        },
        data: payload
      })
    },
    addCategory (context, payload) {
      const accessToken = localStorage.getItem('access_token')

      return axios({
        url: '/categories',
        method: 'post',
        headers: {
          access_token: accessToken
        },
        data: payload
      })
    },
    addProductCategory (context, payload) {
      const accessToken = localStorage.getItem('access_token')

      const id = payload.id

      axios({
        url: `/products/${id}/addCategory`,
        method: 'post',
        headers: {
          access_token: accessToken
        },
        data: {
          categories: payload.categories
        }
      })
        .then(({ data }) => {
          router.push('/products')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCategoryProducts (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        url: `/products?category=${payload}`,
        method: 'get',
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
    searchProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        url: `/products?search=${payload}`,
        method: 'get',
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
    productDetail (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        url: `/products/${payload}`,
        method: 'get',
        headers: {
          access_token: accessToken
        }
      })
        .then(({ data }) => {
          context.commit('setProduct', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
