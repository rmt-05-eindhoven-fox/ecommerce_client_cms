import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance.js'
// import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    banners: [],
    loginStatus: false
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setBanners (state, payload) {
      state.banners = payload
    },
    setNavBar (state, payload) {
      state.loginStatus = payload
    }
  },
  actions: {
    login (context, payload) {
      return axios({
        url: '/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    fetchProducts (context) {
      const token = localStorage.getItem('token')
      const role = localStorage.getItem('role')

      axios({
        url: '/products',
        method: 'GET',
        headers: {
          token,
          role
        }
      })
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    addProduct (context, payload) {
      const token = localStorage.getItem('token')
      const role = localStorage.getItem('role')

      return axios({
        url: '/products',
        method: 'POST',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          category: payload.category
        },
        headers: {
          token,
          role
        }
      })
    },
    editProduct (context, payload) {
      const token = localStorage.getItem('token')
      const role = localStorage.getItem('role')
      return axios({
        url: `/products/${payload.id}`,
        method: 'PUT',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          category: payload.category
        },
        headers: {
          token,
          role
        }
      })
    },
    deleteProduct (context, id) {
      const token = localStorage.getItem('token')
      const role = localStorage.getItem('role')
      return axios({
        url: `/products/${id}`,
        method: 'DELETE',
        headers: {
          token,
          role
        }
      })
    },
    fetchProductById (context, id) {
      const token = localStorage.getItem('token')
      const role = localStorage.getItem('role')
      return axios({
        url: `/products/${id}`,
        method: 'GET',
        headers: {
          token,
          role
        }
      })
    },
    fetchBanners (context) {
      const token = localStorage.getItem('token')
      const role = localStorage.getItem('role')

      axios({
        url: '/banners',
        method: 'GET',
        headers: {
          token,
          role
        }
      })
        .then(({ data }) => {
          context.commit('setBanners', data)
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    addBanner (context, payload) {
      const token = localStorage.getItem('token')
      const role = localStorage.getItem('role')

      return axios({
        url: '/banners',
        method: 'POST',
        data: {
          title: payload.title,
          status: payload.status,
          image_url: payload.image_url
        },
        headers: {
          token,
          role
        }
      })
    },
    editBanner (context, payload) {
      const token = localStorage.getItem('token')
      const role = localStorage.getItem('role')
      return axios({
        url: `/banners/${payload.id}`,
        method: 'PUT',
        data: {
          title: payload.title,
          status: payload.status,
          image_url: payload.image_url
        },
        headers: {
          token,
          role
        }
      })
    },
    deleteBanner (context, id) {
      const token = localStorage.getItem('token')
      const role = localStorage.getItem('role')
      return axios({
        url: `/banners/${id}`,
        method: 'DELETE',
        headers: {
          token,
          role
        }
      })
    },
    fetchBannerById (context, id) {
      const token = localStorage.getItem('token')
      const role = localStorage.getItem('role')
      return axios({
        url: `/banners/${id}`,
        method: 'GET',
        headers: {
          token,
          role
        }
      })
    }
  },
  modules: {
  }
})
