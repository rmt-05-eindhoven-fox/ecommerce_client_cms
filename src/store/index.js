import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router/index'
import money from '../helpers/money'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Products
    products: [],
    // Categories
    categories: []
  },
  mutations: {
    setProducts (state, payload) {
      payload.forEach(el => {
        el.moneyFormat = money(el.price)
      })
      state.products = payload
    },
    setCategories (state, payload) {
      state.categories = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/loginAdmin',
        data: {
          email: payload.user.email_login,
          password: payload.user.password_login
        }
      })
        .then((result) => {
          const accessToken = result.data.access_token
          const loginUser = result.data.email
          localStorage.setItem('access_token', accessToken)
          localStorage.setItem('login_user', loginUser)

          Vue.swal({
            position: 'center',
            icon: 'success',
            title: 'Welcome to E-Commerce CMS',
            text: 'by Bobby Septianto',
            showConfirmButton: false,
            timer: 1750
          })

          router.push({ name: 'Dashboard' })
        })
        .catch((err) => {
          console.log(err.response.data.msg)
          Vue.swal(
            'Error!',
            err.response.data.msg,
            'error'
          )
        })
    },
    readProducts (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: accessToken
        }
      })
        .then((result) => {
          context.commit('setProducts', result.data)
        })
        .catch((err) => {
          console.log(err.response.data.msg)
          Vue.swal(
            'Error!',
            err.response.data.msg,
            'error'
          )
        })
    },
    readProductById (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        method: 'GET',
        url: `/products/${+payload.id}`,
        headers: {
          access_token: accessToken
        }
      })
    },
    createProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: accessToken
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          description: payload.description,
          price: payload.price,
          stock: payload.stock,
          CategoryId: payload.CategoryId
        }
      })
        .then((result) => {
          Vue.swal(
            'Created!',
            'Your new product has been created.',
            'success'
          )
          router.push({ name: 'Dashboard' })
        })
        .catch((err) => {
          console.log(err.response.data.msg)
          Vue.swal(
            'Error!',
            err.response.data.msg,
            'error'
          )
        })
    },
    editProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'PUT',
        url: `/products/${+payload.id}`,
        headers: {
          access_token: accessToken
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          description: payload.description,
          price: payload.price,
          stock: payload.stock,
          CategoryId: payload.CategoryId
        }
      })
        .then((result) => {
          Vue.swal(
            'Edited!',
            'Your product has been edited.',
            'success'
          )
          router.push({ name: 'Dashboard' })
        })
        .catch((err) => {
          console.log(err.response.data.msg)
          Vue.swal(
            'Error!',
            err.response.data.msg,
            'error'
          )
        })
    },
    deleteProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      Vue.swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            axios({
              url: `/products/${+payload}`,
              method: 'DELETE',
              headers: {
                access_token: accessToken
              }
            })
              .then((result) => {
                Vue.swal(
                  'Deleted!',
                  'Your task has been deleted.',
                  'success'
                )
                context.dispatch('readProducts')
              })
              .catch((err) => {
                console.log(err.response.data.msg)
                Vue.swal(
                  'Error!',
                  err.response.data.msg,
                  'error'
                )
              })
          }
        })
        .catch((err) => {
          console.log(err.response.data.msg)
          Vue.swal(
            'Error!',
            err.response.data.msg,
            'error'
          )
        })
    },
    readCategories (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: '/categories',
        headers: {
          access_token: accessToken
        }
      })
        .then((result) => {
          context.commit('setCategories', result.data)
        })
        .catch((err) => {
          console.log(err.response.data.msg)
          Vue.swal(
            'Error!',
            err.response.data.msg,
            'error'
          )
        })
    },
    createCategory (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'POST',
        url: '/categories',
        headers: {
          access_token: accessToken
        },
        data: {
          name: payload.name
        }
      })
        .then((result) => {
          Vue.swal(
            'Created!',
            `Your "${payload.name}" category has been created.`,
            'success'
          )
          context.dispatch('readCategories')
        })
        .catch((err) => {
          console.log(err.response.data.msg)
          Vue.swal(
            'Error!',
            err.response.data.msg,
            'error'
          )
        })
    },
    deleteCategory (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      Vue.swal({
        title: 'Are you sure?',
        text: "All related products will be deleted! You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            axios({
              url: `/categories/${+payload}`,
              method: 'DELETE',
              headers: {
                access_token: accessToken
              }
            })
              .then((result) => {
                Vue.swal(
                  'Deleted!',
                  'Selected category has been deleted.',
                  'success'
                )
                context.dispatch('readCategories')
              })
              .catch((err) => {
                console.log(err.response.data.msg)
                Vue.swal(
                  'Error!',
                  err.response.data.msg,
                  'error'
                )
              })
          }
        })
        .catch((err) => {
          console.log(err.response.data.msg)
          Vue.swal(
            'Error!',
            err.response.data.msg,
            'error'
          )
        })
    }
  },
  modules: {
  },
  getters: {
    filteredProductsByCategory: (state) => (selectedCategory) => {
      return state.products.filter(product => {
        return product.CategoryId === selectedCategory
      })
    }
  }
})
