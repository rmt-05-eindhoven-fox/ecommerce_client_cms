import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  // State, tempat menyimpan data untuk di panggil di component
  state: {
    title: 'Ecommerce-CMS',
    products: [],
    product: {}
  },
  // Mengubah data dstate
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },

    setProduct (state, payload) {
      state.product = payload
    }
  },
  // Method yg digunakan untuk aksi
  actions: {
    async getProducts (context) {
      try {
        const { data } = await axios({
          url: 'products',
          method: 'get'
        })
        console.log(data)
        context.commit('setProducts', data)
      } catch (error) {
        console.log(error.response)
      }
    },

    async getProductById (context, id) {
      try {
        const { data } = await axios({
          url: 'products/' + id,
          method: 'get'
        })
        console.log(data)
        context.commit('setProduct', data)
      } catch (error) {
        console.log(error.response)
      }
    }
  },
  modules: {
  }
})
