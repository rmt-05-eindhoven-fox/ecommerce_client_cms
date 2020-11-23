import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerLabel: 'DASHBOARD',
    storeName: 'POG GAMING STORE',
    products: [],
    categories: [],
    product: []
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload
    },
    setCategories(state, payload) {
      state.categories = payload
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
    fetchCategories(context, token) {
      axios({
          url: '/categories',
          method: "get"
        })
        .then(({
          data
        }) => {
          context.commit('setCategories', data.foundAllCategory)
        })
        .catch(err => {
          res.send(err.response.data.msg);
        })
    },
    fetchProductById(context, payload) {
      axios({
          url: `/products/${payload.id}` ,
          method: 'get',
          headers: {
            access_token: payload.token,
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
    login(context, payload) {
      return  axios({
        url: '/users/loginAdmin',
        method: 'post',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    edit(context, payload) {
      return  axios({
        url: `/products/${payload.id}`,
        method: "put",
        headers: {
          access_token: payload.token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          stock: payload.stock,
          price: payload.price,
          category: payload.category
        },
      })
    },
    add(context, payload) {
      return axios({
        url: '/products',
        method: 'post',
        headers: {
          access_token: payload.token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          stock: payload.stock,
          price: payload.price,
          category: payload.category
        }
      })
    },
    deleteProd(context, payload) {
      return axios({
        url: '/products/' + payload.id,
        method: "delete",
        headers: {
          access_token: payload.token
        },
      })
    },
    AddCategory(context, payload) {
      return axios({
        url: '/categories',
        method: 'post',
        headers: {
          access_token: payload.token
        },
        data: {
          name: payload.name
        }
      })
    },
    AddBanner(context, payload) {
      return axios({
        url: '/banners',
        method: 'post',
        headers: {
          access_token: payload.token
        },
        data: {
          title: payload.title,
          status: payload.status,
          image_url: payload.image_url
        }
      })
    }
  },
  modules: {
  }
})
