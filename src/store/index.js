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
    userLoggedIn: ''
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
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
    }
  },
  modules: {
  }
})
