import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios'
import router from '../router/index'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    banners: []
  },
  mutations: {
    fetchProduct (state, data) {
      state.products = data
    },
    fetchBanner (state, dataBanner) {
      state.banners = dataBanner
    }
  },
  actions: {
    login (context, dataUser) {
      axios({
        url: '/login',
        method: 'post',
        data: {
          email: dataUser.email,
          password: dataUser.password
        }
      }).then(data => {
        const token = data.data.token
        if (token) {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Welcome back',
            timer: 1500
          })
          localStorage.setItem('token', token)
          router.push({ path: '/' })
        }
      }).catch(err => {
        console.log(err.response)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response.data.errors}`,
          timer: 2000
        })
      })
    },
    fetchBanner (context) {
      axios({
        url: '/banner',
        method: 'get',
        headers: {
          token: localStorage.token
        }
      }).then(data => {
        // console.log(data.data.data, 'ini alsdj')
        context.commit('fetchBanner', data.data.data)
      }).catch(err => console.log(err))
    },
    fetchProduct (context) {
      axios({
        url: '/product',
        method: 'get',
        headers: {
          token: localStorage.getItem('token')
        }
      }).then(data => {
        // console.log(data.data.dataProduct, 'aldkjfl')
        context.commit('fetchProduct', data.data.dataProduct)
      }).catch(err => console.log(err))
    },
    addBanner (context, dataBanner) {
      axios({
        url: '/banner',
        method: 'post',
        headers: {
          token: localStorage.token
        },
        data: {
          title: dataBanner.title,
          image_url: dataBanner.image_url,
          status: dataBanner.status,
          category: dataBanner.category
        }
      }).then(data => {
        Swal.fire({
          title: 'Success',
          text: 'Success create banner',
          timer: 2000
        })
        context.dispatch('fetchBanner')
      }).catch(err => {
        console.log(err)
        Swal.fire({
          title: 'Ooops',
          text: 'Type correctly, Try again!',
          timer: 2000
        })
      })
    },
    addProduct (context, dataProduct) {
      axios({
        url: '/product',
        method: 'post',
        headers: {
          token: localStorage.token
        },
        data: {
          name: dataProduct.name,
          image_url: dataProduct.image_url,
          price: dataProduct.price,
          stock: dataProduct.stock,
          category: dataProduct.category
        }
      }).then(newProduct => {
        // console.log(newProduct, 'lasjf')
        Swal.fire({
          title: 'Success',
          text: 'Success create product',
          timer: 2000
        })
        context.dispatch('fetchProduct')
      }).catch(err => {
        console.log(err)
        Swal.fire({
          title: 'Ooops',
          text: 'Type correctly, Try again!',
          timer: 2000
        })
      })
    },
    destroyBanner (context, id) {
      axios({
        url: `/banner/${id}`,
        method: 'delete',
        headers: {
          token: localStorage.token
        }
      }).then(banner => {
        if (banner) {
          Swal.fire(
            'Deleted!',
            'Your product has been deleted.',
            'success'
          )
          context.dispatch('fetchBanner')
        }
      }).catch(err => {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      })
    },
    delete (context, id) {
      axios({
        url: `/product/${id}`,
        method: 'delete',
        headers: {
          token: localStorage.token
        }
      }).then(product => {
        if (product) {
          Swal.fire(
            'Deleted!',
            'Your product has been deleted.',
            'success'
          )
          context.dispatch('fetchProduct')
        }
        // console.log(product.data, 'ini delete')
      }).catch(err => {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      })
    },
    getProductById (context, id) {
      return axios({
        url: `/product/${id}`,
        method: 'get',
        headers: {
          token: localStorage.token
        }
      })
    },
    getBannerById (context, id) {
      return axios({
        url: `/banner/${id}`,
        method: 'get',
        headers: {
          token: localStorage.token
        }
      })
    },
    editBanner (context, dataBanner) {
      axios({
        url: `/banner/${dataBanner.id}`,
        method: 'put',
        headers: {
          token: localStorage.token
        },
        data: {
          title: dataBanner.title,
          image_url: dataBanner.image_url,
          status: dataBanner.status,
          category: dataBanner.category
        }
      }).then(doneEdit => {
        Swal.fire(
          'Edited!',
          'Your product has been edited.',
          'success'
        )
        context.dispatch('fetchBanner')
      }).catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Type correctly!'
        })
        console.log(err)
      })
    },
    editProduct (context, dataProduct) {
      axios({
        url: `/product/${dataProduct.id}`,
        method: 'put',
        headers: {
          token: localStorage.token
        },
        data: {
          name: dataProduct.name,
          image_url: dataProduct.image_url,
          price: dataProduct.price,
          stock: dataProduct.stock,
          category: dataProduct.category
        }
      }).then(afterEdit => {
        Swal.fire(
          'Edited!',
          'Your product has been edited.',
          'success'
        )
        context.dispatch('fetchProduct')
      }).catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Type correctly!'
        })
        console.log(err)
      })
    }
  },
  modules: {
  }
})
