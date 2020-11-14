import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from '../axios/axiosInstance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataProduct: []
  },
  mutations: {
    productMutations (state, payload) {
      state.dataProduct = payload
    }
  },
  actions: {
    login (context, payload) {
      console.log(payload, '<< payload store')
      axios({
        url: '/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          console.log(data, '<<< data')
          const token = data.access_token
          console.log(token, '<<< ini token')
          localStorage.setItem('access_token', token)
          router.push('home')
        })
    },
    logout () {
      console.log('masuk logout store')
      localStorage.clear()
      router.push('/')
    },
    productFetch (context) {
      const token = localStorage.access_token

      axios({
        url: '/product',
        method: 'GET',
        headers: {
          token
        }
      })
        .then(({ data }) => {
          console.log(data, '<<<Data fetch')
          context.commit('productMutations', data)
        })
        .catch(err => console.log(err.response))
    },
    productAdd (context, payload) {
      const token = localStorage.getItem('access_token')
      console.log(token)
      return axios({
        url: '/product',
        method: 'POST',
        headers: {
          token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
    },
    delete (context, id) {
      const token = localStorage.access_token

      axios({
        url: `/product/${id}`,
        method: 'DELETE',
        headers: {
          token
        }
      })
    },
    edit (context, payload) {
      const token = localStorage.access_token

      return axios({
        url: `/product/${payload.id}`,
        method: 'PUT',
        headers: {
          token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
    }
  },
  modules: {
  }
})
