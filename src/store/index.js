import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'EG Store',
    products: []
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    }
  },
  actions: {
    fetchProducts (context) {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'get',
        url: '/products',
        headers: { access_token: token }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('setProducts', data)
          // this.products = data
        })
        .catch(err => console.log(err))
    },
    erase (context, id) {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'delete',
        url: `/products/${id}`,
        headers: { access_token: token }
      })
        .then(() => {
          this.fetchProducts(context)
        })
        .catch((err) => console.log(err))
    }
  },
  modules: {
  }
})
