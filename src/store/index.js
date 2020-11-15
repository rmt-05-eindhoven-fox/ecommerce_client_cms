import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import axios from '../axios/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        url: '/users/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(res => {
          console.log('berhasil')
          const token = res.data.access_token
          localStorage.setItem('access_token', token)
          router.push('/dashboard/product')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProduct (context) {
      const token = localStorage.getItem('access_token')
      axios({
        url: '/products',
        method: 'get',
        headers: {
          access_token: token
        }
      })
        .then(res => {
          context.commit('setProducts', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct ({ context, dispatch }, payload) {
      const token = localStorage.getItem('access_token')
      const { name, imageUrl, price, stock } = payload
      axios({
        url: '/products',
        method: 'post',
        headers: {
          access_token: token
        },
        data: {
          name, image_url: imageUrl, price, stock
        }
      })
        .then(res => {
          console.log('berhasil')
          dispatch('fetchProduct')
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateProduct ({ context, dispatch }, payload) {
      const { id, name, imageUrl, price, stock } = payload
      const token = localStorage.getItem('access_token')
      axios({
        url: `products/${id}`,
        method: 'put',
        headers: {
          access_token: token
        },
        data: {
          name, image_url: imageUrl, price, stock
        }
      })
        .then(res => {
          console.log('berhasil update')
          dispatch('fetchProduct')
          router.push('/dashboard/product')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct ({ context, dispatch }, id) {
      const token = localStorage.getItem('access_token')
      axios({
        url: `/products/${id}`,
        method: 'delete',
        headers: {
          access_token: token
        }
      })
        .then(res => {
          console.log('delete berhasil')
          dispatch('fetchProduct')
        })
        .catch(err => {
          console.log(err)
        })
    },
    logout () {
      localStorage.clear()
      router.push('/login')
    }
  },
  modules: {
  }
})
