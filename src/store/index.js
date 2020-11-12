import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  // State, tempat menyimpan data untuk di panggil di component
  state: {
    title: 'Ecommerce-CMS',
    pageTitle: '',
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
    },

    changePageTitle (state, payload) {
      state.pageTitle = payload
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
        const { products } = data
        context.commit('setProducts', products)
        return
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
        const { product } = data
        context.commit('setProduct', product)
        return product
      } catch (error) {
        console.log(error.response)
      }
    },

    changePageTitle (context, page) {
      context.commit('changePageTitle', page)
    }
  },
  modules: {
  }
})
