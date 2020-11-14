import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'
import router from '../router/index'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    categories: [],
    banners: [],
    userLoggedIn: ''
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setBanners (state, payload) {
      state.banners = payload
    },
    setCategories (state, payload) {
      state.categories = payload
    },
    setUserLoggedIn (state, payload) {
      state.userLoggedIn = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        url: '/login',
        method: 'post',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          const accessToken = data.access_token
          const email = data.email
          localStorage.setItem('access_token', accessToken)
          localStorage.setItem('email', email)
          router.push({ name: 'Products' })
          Swal.fire(
            'Login Successful',
            `Welcome ${email}`,
            'success'
          )
        })
        .catch(err => {
          Swal.fire(
            'Error',
            `${err.response.data.msg}`,
            'error'
          )
        })
    },
    fetchProducts (context, accessToken) {
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
        .catch(({ response }) => {
          console.log(response)
        })
    },
    addProduct (context, payload) {
      axios({
        url: '/products',
        method: 'post',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          CategoryId: payload.CategoryId,
          price: payload.price,
          stock: payload.stock
        },
        headers: {
          access_token: payload.access_token
        }
      })
        .then(({ data }) => {
          router.push('Products')
          Swal.fire(
            'Add Product Success',
            `Product ${data.name} is successfully added`,
            'success'
          )
        })
        .catch(err => {
          Swal.fire(
            'Error',
            `${err.response.data.msg}`,
            'error'
          )
        })
    },
    getProductById (context, payload) {
      return axios({
        url: `/products/${payload.id}`,
        method: 'get',
        headers: {
          access_token: payload.access_token
        }
      })
    },
    editProduct (context, payload) {
      axios({
        url: `/products/${payload.id}`,
        method: 'put',
        headers: {
          access_token: payload.access_token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          CategoryId: payload.CategoryId,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(({ data }) => {
          router.push({ name: 'Products' })
          Swal.fire(
            'Edit Successfull',
            `Product with ID ${data.id} is successfully edited`,
            'success'
          )
        })
        .catch(err => {
          Swal.fire(
            'Error',
            `${err.response.data.msg}`,
            'error'
          )
        })
    },
    deleteProduct (context, payload) {
      return axios({
        url: `/products/${payload.id}`,
        method: 'DELETE',
        headers: {
          access_token: payload.access_token
        }
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
        .catch(({ response }) => {
          console.log(response)
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
        .catch(({ response }) => {
          console.log(response)
        })
    },
    addBanner (context, payload) {
      axios({
        url: '/banners',
        method: 'post',
        data: {
          title: payload.title,
          image_url: payload.image_url,
          status: payload.status
        },
        headers: {
          access_token: payload.access_token
        }
      })
        .then(({ data }) => {
          router.push('Banners')
          Swal.fire(
            'Add Banner Success',
            `Banner ${data.title} is successfully added`,
            'success'
          )
        })
        .catch(err => {
          Swal.fire(
            'Error',
            `${err.response.data.msg}`,
            'error'
          )
        })
    },
    deleteBanner (context, payload) {
      return axios({
        url: `/banners/${payload.id}`,
        method: 'DELETE',
        headers: {
          access_token: payload.access_token
        }
      })
    },
    editBanner (context, payload) {
      axios({
        url: `/banners/${payload.id}`,
        method: 'put',
        headers: {
          access_token: payload.access_token
        },
        data: {
          title: payload.title,
          image_url: payload.image_url,
          status: payload.status
        }
      })
        .then(({ data }) => {
          router.push({ name: 'Banners' })
          Swal.fire(
            'Edit Successfull',
            `Banner with ID ${data.id} is successfully edited`,
            'success'
          )
        })
        .catch(err => {
          Swal.fire(
            'Error',
            `${err.response.data.msg}`,
            'error'
          )
        })
    },
    getBannerById (context, payload) {
      return axios({
        url: `/banners/${payload.id}`,
        method: 'get',
        headers: {
          access_token: payload.access_token
        }
      })
    },
    addCategory (context, payload) {
      axios({
        url: '/categories',
        method: 'post',
        data: {
          name: payload.name
        },
        headers: {
          access_token: payload.access_token
        }
      })
        .then(({ data }) => {
          router.push('Categories')
          Swal.fire(
            'Add Category Success',
            `Category ${data.name} is successfully added`,
            'success'
          )
        })
        .catch(err => {
          Swal.fire(
            'Error',
            `${err.response.data.msg}`,
            'error'
          )
        })
    },
    deleteCategory (context, payload) {
      return axios({
        url: `/categories/${payload.id}`,
        method: 'DELETE',
        headers: {
          access_token: payload.access_token
        }
      })
    },
    editCategory (context, payload) {
      axios({
        url: `/categories/${payload.id}`,
        method: 'put',
        headers: {
          access_token: payload.access_token
        },
        data: {
          name: payload.name
        }
      })
        .then(({ data }) => {
          router.push({ name: 'Categories' })
          Swal.fire(
            'Edit Successfull',
            `Category with ID ${data.id} is successfully edited`,
            'success'
          )
        })
        .catch(err => {
          Swal.fire(
            'Error',
            `${err.response.data.msg}`,
            'error'
          )
        })
    },
    getCategoryById (context, payload) {
      return axios({
        url: `/categories/${payload.id}`,
        method: 'get',
        headers: {
          access_token: payload.access_token
        }
      })
    }
  },
  modules: {
  }
})
