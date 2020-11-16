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
    banners: [],
    categories: [],
    productsHeader: 'visible',
    bannersHeader: 'visible'
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
    setBanners (state, payload) {
      state.banners = payload
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
    },
    pushBanners (state, payload) {
      state.banners.push(payload)
    },
    spliceEditBanner (state, payload) {
      state.banners.splice(state.banners.findIndex(banner => banner.id === payload.id), 1, payload)
    },
    filterDeleteBanner (state, payload) {
      state.banners = state.banners.filter(banner => banner.id !== payload)
    },
    setBannersHeader (state, payload) {
      state.bannersHeader = payload
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
    fetchAllBanners (context) {
      axios.get('/banners', {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('setBanners', data)
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
    },
    fetchBannerById (context, payload) {
      return axios.get(`/banners/${payload}`, {
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    addBanner (context, payload) {
      return axios.post('/banners', payload, {
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    editBanner (context, payload) {
      return axios.put(`/banners/${payload.id}`, payload, {
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    deleteBanner (context, payload) {
      return axios.delete(`/banners/${payload}`, {
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
    },
    getBannersByCategoryId: (state) => (id) => {
      if (!id) return state.banners
      else return state.banners.filter(banner => banner.CategoryId === +id)
    }
  }
})
