import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios'
import router from '../router/index'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    fetchProduct (state, data) {
      state.products = data
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
            showConfirmButton: false,
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
          text: `${err.response.data.errors}`
        })
      })
    },
    fetchProduct (context) {
      axios({
        url: '/product',
        method: 'get',
        headers: {
          token: localStorage.getItem('token')
        }
      }).then(data => {
        // console.log(data, 'aldkjfl')
        context.commit('fetchProduct', data.data.dataProduct)
      }).catch(err => console.log(err))
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
          stock: dataProduct.stock
        }
      }).then(newProduct => {
        // console.log(newProduct, 'lasjf')
        Swal.fire({
          title: 'Success',
          text: 'Success create product'
        })
        context.dispatch('fetchProduct')
      }).catch(err => {
        console.log(err)
        Swal.fire({
          title: 'Ooops',
          text: 'Try again'
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
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
              )
              context.dispatch('fetchProduct')
            }
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
        }
        // console.log(product.data, 'ini delete')
      }).catch(err => console.log(err))
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
          stock: dataProduct.stock
        }
      }).then(afterEdit => {
        context.dispatch('fetchProduct')
      }).catch(err => console.log(err.response))
    }
  },
  modules: {
  }
})
