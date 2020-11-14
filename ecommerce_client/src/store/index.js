import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'All Celebs...',
    products: []
  },
  mutations: {
    listProducts (state, payload) {
      state.products = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        url: '/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          const token = data.token
          localStorage.setItem('token', token)
          router.push('/home')
          console.log('masuk')
        })
        .catch(err => {
          console.log(err, 'gak masuk')
        })
    },
    fetchProducts (context) {
      axios
        .get('/products')
        .then(({ data }) => {
          // this.products = data
          context.commit('listProducts', data)
        })
        .catch(err => console.log(err))
    },
    logout () {
      localStorage.clear()
      router.push('/')
    },
    addCeleb (context, payload) {
      return axios({
        url: '/products',
        method: 'POST',
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
    },
    deleteCeleb (context, id) {
      return axios({
        url: `/products/${id}`,
        method: 'DELETE',
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    editCeleb (context, payload) {
      // console.log(payload)
      return axios({
        url: `/products/${payload.id}`,
        method: 'PUT',
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
    }
  },
  modules: {
  }
})
