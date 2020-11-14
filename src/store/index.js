import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    categories: [],
    banners: []
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setCategories (state, payload) {
      state.categories = payload
    },
    setBanners (state, payload) {
      state.banners = payload
    }
  },
  actions: {
    fetchProducts (context) {
      axios
        .get('/products')
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      const token = localStorage.getItem('token')
      return axios({
        url: '/products',
        method: 'POST',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          CategoryId: payload.CategoryId
        },
        headers: {
          token
        }
      })
    },
    addBanner (context, payload) {
      const token = localStorage.getItem('token')
      return axios({
        url: '/banners',
        method: 'POST',
        data: {
          title: payload.title,
          image_url: payload.image_url,
          status: payload.status
        },
        headers: {
          token
        }
      })
    },
    putProduct (context, payload) {
      const token = localStorage.getItem('token')
      return axios({
        url: '/products/' + payload.id,
        method: 'PUT',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price
        },
        headers: {
          token
        }
      })
    },
    putBanner (context, payload) {
      const token = localStorage.getItem('token')
      return axios({
        url: '/banners/' + payload.id,
        method: 'PUT',
        data: {
          title: payload.title,
          image_url: payload.image_url,
          status: payload.status
        },
        headers: {
          token
        }
      })
    },
    fetchProductById (context, payload) {
      const id = payload
      const token = localStorage.getItem('token')
      return axios({
        url: `/products/${id}`,
        method: 'GET',
        headers: {
          token
        }
      })
    },
    fetchBannerById (context, payload) {
      const id = payload
      const token = localStorage.getItem('token')
      return axios({
        url: `/banners/${id}`,
        method: 'GET',
        headers: {
          token
        }
      })
    },
    deleteProduct (context, payload) {
      const id = payload
      const token = localStorage.getItem('token')
      return axios({
        url: `/products/${id}`,
        method: 'DELETE',
        headers: {
          token
        }
      })
    },
    deleteBanner (context, payload) {
      const id = payload
      const token = localStorage.getItem('token')
      return axios({
        url: `/banners/${id}`,
        method: 'DELETE',
        headers: {
          token
        }
      })
    },
    fetchCategories (context) {
      const token = localStorage.getItem('token')
      axios({
        url: '/categories',
        method: 'GET',
        headers: {
          token
        }
      })
        .then(({ data }) => {
          context.commit('setCategories', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchBanners (context) {
      const token = localStorage.getItem('token')
      axios({
        url: '/banners',
        method: 'GET',
        headers: {
          token
        }
      })
        .then(({ data }) => {
          context.commit('setBanners', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
