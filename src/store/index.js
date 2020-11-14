import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fetchProduct: '',
    dataEdit: {}
  },
  mutations: {
    FETCHPRODUCT (state, data) {
      state.fetchProduct = data
    },
    ADDPRODUCT (state, data) {
      state.fetchProduct.push(data)
    },
    EDITPAGE (state, data) {
      state.dataEdit = data
    }
  },
  actions: {
    login (context, payload) {
      return axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
        })
    },
    fetchProduct (context) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('FETCHPRODUCT', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct ({ commit }, payload) {
      return axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(({ data }) => {
          commit('ADDPRODUCT', data)
          router.push({ path: '/products' })
        })
    },
    editPage (context, payload) {
      return axios({
        method: 'PUT',
        url: `/products/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
    },
    deleteProduct (context, id) {
      return axios({
        method: 'delete',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    }
  },
  modules: {
  }
})
