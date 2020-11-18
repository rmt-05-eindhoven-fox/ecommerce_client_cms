import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS(state, data) {
      state.products = data;
    }
  },
  actions: {
    login(context, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
      .then( ({data}) => {
        console.log("INI DATA",data);
        console.log(data.access_token);
        console.log(data.role);
        const access_token = data.access_token
        const role = data.role
        localStorage.setItem('access_token', access_token)
        localStorage.setItem('role', role)
        router.push({name: 'Dashboard'})
    })
    .catch(error => {
        console.log("Error From FormLogin", error);
    })
    },
    fetchProducts(context, payload) {
      const access_token = localStorage.getItem('access_token')
      const role = localStorage.getItem('role')

      axios({
        method: 'GET',
        url: 'http://localhost:3000/products',
        headers: {
          access_token,
          role
        }
      })
        .then((data) => {
          console.log(data.data);
          context.commit('SET_PRODUCTS', data);
        })
        .catch(error => {
        console.log(error);
      })
    },
    fetchProductById(context, id) {
      const access_token = localStorage.getItem('access_token')
      const role = localStorage.getItem('role')

      axios({
        method: 'GET',
        url: `/products/${id}`,
        headers: {
          access_token,
          role
        }
      })
        .then(data => {
          context.commit('SET_PRODUCTS', data);
        })
        .catch(error => {
        console.log(error);
      })
    },
    addProduct(context, payload) {
      const access_token = localStorage.getItem('access_token')
      const role = localStorage.getItem('role')

      axios({
        method: 'POST',
        url: 'http://localhost:3000/products',
        data: {
          name: payload.name,
          images_url: payload.images_url,
          price: payload.price,
          stock: payload.stock,
          category: payload.category
        },
        headers: {
          access_token,
          role
        }
      })
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.log(error);
        })
    },
    editProduct(context, payload) {
      const access_token = localStorage.getItem('access_token')
      const role = localStorage.getItem('role')

      axios({
        method: 'PUT',
        url: `http://localhost:3000/products/${payload.id}`,
        data: {
          name: payload.name,
          images_url: payload.images_url,
          price: payload.price,
          stock: payload.stock,
          category: payload.category
        },
        headers: {
          access_token,
          role
        }
      })
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error);
      })
    },
    deleteProduct(context, payload) {
      const access_token = localStorage.getItem('access_token')
      const role = localStorage.getItem('role')
      axios({
        method: 'DELETE',
        url: `http://localhost:3000/products/${payload.id}`,
        headers: {
          access_token,
          role
        }
      })
    }
  },
  modules: {
  },
  getters: {
    product: (state, getters) => {
      return getters.products
    }
  }
})
