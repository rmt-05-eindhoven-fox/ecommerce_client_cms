import Swal from 'sweetalert2'
import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios.js'
import router from '../router/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    userInfo: {
      isLoggedIn: false,
      name: ''
    }
  },
  mutations: {
    productFetch (state, payload) {
      state.products = payload
    },
    isUserLoggedIn: (state, isUserLoggedIn) => {
      state.userInfo.isLoggedIn = isUserLoggedIn
    },
    setUserName: (state, name) => {
      state.userInfo.name = name
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
        router.push('/dashboard/Product')
      }).catch(err => {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err.json
        })
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
    editProduct (context, payload) {
      const token = localStorage.getItem('token')
      return axios({
        url: `/products/${payload.id}`,
        method: 'PUT',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        },
        headers: {
          token
        }
      }).then(({ data }) => {
        console.log('data', data)
        context.dispatch('fetchProduct')
      }).catch((err) => {
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
          stock: payload.stock
        },
        headers: {
          token
        }
      }).then(({ data }) => {
        console.log(data)
      }).catch((err) => {
        console.log(err)
      })
    },
    deleteProduct (context, id) {
      const token = localStorage.getItem('token')
      axios({
        url: `/products/${id}`,
        method: 'DELETE',
        headers: {
          token
        }
      }).then(({ data }) => {
        context.dispatch('fetchProduct')
      }).catch(err => {
        console.log(err.responseJSOn.message, '<<<errr')
      })
    },
    logout () {
      localStorage.removeItem('token')
      router.push({ name: 'Dashboard' })
    }
  },
  modules: {
  }
})

export const getters = {
  isUserLoggedIn: state => {
    return state.userInfo.isLoggedIn
  },

  getUserName: state => {
    return state.userInfo.name
  }
}
