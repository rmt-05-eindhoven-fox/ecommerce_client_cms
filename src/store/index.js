import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userDetail: {
      name: localStorage.name,
      avatar: localStorage.avatar,
      email: localStorage.email,
      role: localStorage.role
    },
    products: [],
    categories: [],
    productsHeader: 'visible'
  },
  mutations: {
    setUserDetail (state, payload) {
      const { name, avatar, email, role } = payload
      state.userDetail = { name, avatar, email, role }
    },
    setProductsHeader (state, payload) {
      state.productsHeader = payload
    },
    setProducts (state, payload) {
      state.products = payload
    },
    setCategories (state, payload) {
      state.categories = payload
    },
    pushProducts (state, payload) {
      state.products.push(payload)
    },
    spliceEditProduct (state, payload) {
      state.products.splice(state.products.findIndex(product => product.id === payload.id), 1, payload)
    },
    filterDeleteProduct (state, payload) {
      state.products = state.products.filter(product => product.id !== payload)
    }
  },
  actions: {
    login (context, payload) {
      return axios.post('/login', payload)
    },
    fetchAllProducts (context) {
      axios.get('/products', {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch(err => console.log(err))
    },
    fetchCategories (context) {
      axios.get('/categories', {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('setCategories', data)
        })
        .catch(err => console.log(err))
    },
    fetchProductById (context, payload) {
      return axios.get(`/products/${payload}`, {
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    addProduct (context, payload) {
      return axios.post('/products', payload, {
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    editProduct (context, payload) {
      return axios.put(`/products/${payload.id}`, payload, {
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    deleteProduct (context, payload) {
      return axios.delete(`/products/${payload}`, {
        headers: {
          access_token: localStorage.access_token
        }
      })
    }
  },
  modules: {
  },
  getters: {
    getCategoryById: (state) => (id) => {
      return state.categories.find(category => category.id === id)
    },
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === id)
    },
    getProductsByCategoryId: (state) => (id) => {
      if (!id) return state.products
      else return state.products.filter(product => product.CategoryId === +id)
    }
  }
})
