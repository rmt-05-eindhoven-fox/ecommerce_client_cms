import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance.js'
// import swal from 'sweetalert'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    categories: [],
    banners: []
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setCategories (state, payload) {
      console.log(payload)
      state.categories = payload
    },
    setBanners (state, payload) {
      state.banners = payload
    }
  },
  actions: {
    postLogin (context, payload) {
      return axios({
        url: '/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    fetchProducts (context) {
      axios({
        url: '/products',
        method: 'GET',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      return axios({
        url: '/products',
        method: 'POST',
        headers: { token: localStorage.getItem('token') },
        data: {
          name: payload.name,
          imgUrl: payload.imgUrl,
          price: payload.price,
          stock: payload.stock,
          CategoryId: payload.CategoryId
        }
      })
    },
    deleteProduct (context, payload) {
      axios({
        url: '/products/' + payload,
        method: 'DELETE',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(data => console.log('Delete berhasil!!!'))
        .catch(err => console.log(err))
    },
    editProduct (context, payload) {
      axios({
        url: '/products/' + payload.id,
        method: 'PUT',
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: payload.name,
          imgUrl: payload.imgUrl,
          price: payload.price,
          stock: payload.stock,
          CategoryId: payload.CategoryId
        }
      })
        .then(data => {
          console.log(data)
        })
        .catch(err => console.log(err))
    },
    fetchCategory (context) {
      axios({
        url: '/categories',
        method: 'GET',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          context.commit('setCategories', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    AddCategory (context, payload) {
      axios({
        url: '/categories',
        method: 'POST',
        headers: { token: localStorage.getItem('token') },
        data: {
          name: payload.name
        }
      })
        .then(data => {
          // return swal({
          //   title: 'Success',
          //   text: 'Add Category success',
          //   icon: 'success',
          //   buttons: 'OK'
          // })
        })
        // .then(data1 => {
        //   this.$router.push('Product')
        // })
        .catch(err => console.log(err))
    },
    EditCategory (context, payload) {
      axios({
        url: '/categories/' + payload.id,
        method: 'PUT',
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: payload.name
        }
      })
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteCategory (context, payload) {
      axios({
        url: '/categories/' + payload,
        method: 'DELETE',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(data => console.log('delete category berhasil'))
        .catch(err => console.log(err))
    },
    AddBanner (context, payload) {
      axios({
        url: 'banners',
        method: 'POST',
        headers: {
          token: localStorage.token
        },
        data: {
          title: payload.title,
          img_Url: payload.img_Url,
          status: payload.status
        }
      })
        .then(data => console.log(data))
        .catch(err => console.log(err))
    },
    fetchBanner (context) {
      axios({
        url: '/banners',
        method: 'GET',
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          context.commit('setBanners', data)
        })
        .catch(err => console.log(err))
    },
    EditBanner (context, payload) {
      axios({
        url: '/banners/' + payload.id,
        method: 'PUT',
        headers: {
          token: localStorage.token
        },
        data: {
          title: payload.title,
          img_Url: payload.img_Url,
          status: payload.status
        }
      })
        .then(data => console.log(data))
        .catch(err => console.log(err))
    },
    deleteBanner (context, payload) {
      axios({
        url: '/banners/' + payload,
        method: 'DELETE',
        headers: {
          token: localStorage.token
        }
      })
        .then(data => console.log('delete banner berhasil'))
        .catch(err => console.log(err))
    }
  },
  modules: {
  }
})
