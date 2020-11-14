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
    banners: [],
    product: {},
    banner: {},
    categories: []
  },
  // Mengubah data dstate
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },

    setProduct (state, payload) {
      state.product = payload
    },

    setBanners (state, payload) {
      state.banners = payload
    },

    setBanner (state, payload) {
      state.banner = payload
      console.log(payload)
    },

    setCategories (state, payload) {
      state.categories = payload
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

    async getBanners (context) {
      try {
        const { data } = await axios({
          url: 'banners',
          method: 'get',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        const { banners } = data
        context.commit('setBanners', banners)
        return
      } catch (error) {
        console.log(error.response)
      }
    },

    async getBannerById (context, bannerId) {
      try {
        const { data } = await axios({
          url: 'banners/' + bannerId,
          method: 'get',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        const { banner } = data
        context.commit('setBanner', banner)
        return banner
      } catch (error) {
        console.log(error.response)
      }
    },

    async getCategories (context) {
      try {
        const { data } = await axios({
          url: 'categories',
          method: 'get',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        const { categories } = data || [{ name: 'No many categories', id: '' }]
        context.commit('setCategories', categories)
        return
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
