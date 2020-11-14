import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerLabel: 'DASHBOARD',
    storeName: 'E-Commerce CMS',
    products: [],
    product: []
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload
    },
    setProduct(state, payload) {
      state.product = payload
    }
  },
  actions: {
    fetchProducts(context, token) {
      axios({
          url: '/products',
          method: "get",
          headers: {
            access_token: token
          }
        })
        .then(({
          data
        }) => {
          context.commit('setProducts', data.foundAllProduct)
        })
        .catch(err => {
          res.send(err.response.data.msg);
        })
    },
    fetchProductById(context, token, id) {
      axios({
          url: `/products/${id}` ,
          method: 'get',
          headers: {
            access_token: token
          }
        })
        .then(({
          data
        }) => {
          context.commit('setProduct', data.foundProduct)
        })
        .catch(err => {
          res.send(err.response.data.msg);
        })
    },
  },
  modules: {
  }
})
