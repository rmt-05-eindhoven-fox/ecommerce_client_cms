import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router'
import store from '@/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userEmail: '',
    products: [],
    categories: [],
    currentCategory: '',
    detailProduct: '',
    banners: [],
    detailBanner: ''
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
    },
    setBanners (state, payload) {
      state.banners = payload
    },
    setBanner (state, payload) {
      state.detailBanner = payload
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
    editProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: `/products/${payload.id}`,
        method: 'put',
        headers: {
          access_token: accessToken
        },
        data: {
          name: payload.name,
          description: payload.description,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
    },
    deleteProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')

      axios({
        url: `/products/${payload.id}`,
        method: 'delete',
        headers: {
          access_token: accessToken
        }
      })
        .then(({ data }) => {
          store.dispatch('fetchProducts')
          router.push('/products')
        })
        .catch(err => {
          console.log(err)
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
    deleteCategory (context, payload) {
      const accessToken = localStorage.getItem('access_token')

      axios({
        url: `/categories/${payload.id}`,
        method: 'delete',
        headers: {
          access_token: accessToken
        }
      })
        .then(({ data }) => {
          store.dispatch('fetchCategories')
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProductCategory (context, payload) {
      const accessToken = localStorage.getItem('access_token')

      const id = payload.id

      axios({
        url: `/products/${id}/category`,
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
    addProductCategoryFromEdit (context, payload) {
      const accessToken = localStorage.getItem('access_token')

      const id = payload.id

      return axios({
        url: `/products/${id}/category`,
        method: 'post',
        headers: {
          access_token: accessToken
        },
        data: {
          categories: payload.categories
        }
      })
    },
    deleteProductCategory (context, payload) {
      const accessToken = localStorage.getItem('access_token')

      const id = payload.id

      return axios({
        url: `/products/${id}/category`,
        method: 'delete',
        headers: {
          access_token: accessToken
        },
        data: {
          id: payload.category
        }
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
    },
    fetchBanners (context) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        url: '/banners',
        method: 'get',
        headers: {
          access_token: accessToken
        }
      })
        .then(({ data }) => {
          context.commit('setBanners', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addBanner (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        url: '/banners',
        method: 'post',
        headers: {
          access_token: accessToken
        },
        data: payload
      })
        .then(({ data }) => {
          store.dispatch('fetchBanners')
          router.push('/banners')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchBanner (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        url: `/banners/${payload.id}`,
        method: 'get',
        headers: {
          access_token: accessToken
        }
      })
        .then(({ data }) => {
          context.commit('setBanner', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    editBanner (context, payload) {
      const accessToken = localStorage.getItem('access_token')

      return axios({
        url: `/banners/${payload.id}`,
        method: 'put',
        headers: {
          access_token: accessToken
        },
        data: {
          title: payload.title,
          description: payload.description,
          image_url: payload.image_url,
          type: payload.type,
          status: payload.status
        }
      })
    },
    deleteBanner (context, payload) {
      const accessToken = localStorage.getItem('access_token')

      axios({
        url: `/banners/${payload.id}`,
        method: 'delete',
        headers: {
          access_token: accessToken
        }
      })
        .then(({ data }) => {
          store.dispatch('fetchBanners')
          router.push('/banners')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
