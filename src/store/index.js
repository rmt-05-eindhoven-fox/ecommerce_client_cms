import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: 'http://localhost:3000',
    products: [],
    test: 'asdasdasd'
  },
  mutations: {
    setProducts (state, payload) {
      console.log(payload, '<< set')
      state.products = payload
    }
  },
  actions: {
    fetchProducts ({ commit }) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000' + '/products'
      })
        .then(({ data }) => {
          console.log(data)
          commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
