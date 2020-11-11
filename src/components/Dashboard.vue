<template>
  <div>
    <!-- NAVBAR -->
    <!-- <div class="py-1 shadow-sm">
    <nav class="px-4">
        <div id="logo" class="font-weight-bold">
        <div >E-commerce CMS</div>
        </div>
        <div style="display: flex; align-items: center; font-size: 12px">
        <a @click.prevent = "changePage('addProduct')" class="pr-1" href="#">Add</a>
        <i type="button" class="fas fa-plus-square pr-4" data-toggle="modal" data-target="#add-task">
        </i>
        <div class="pr-3">{{email}}</div>
        <a @click.prevent = "changePage('login')" class="text-decoration-none px-2" href="#">LOG OUT</a>
        </div>
    </nav>
    </div> -->

    <div class="container hello">
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(product, index) in products"
            :key="product.id"
          >
              <td>{{index + 1}}</td>
              <td class="w-20"><img :src="product.image_url"></td>
              <td>{{product.name}}</td>
              <td>{{product.price}}</td>
              <td>{{product.stock}}</td>
              <td>
                  <button @click="$router.push(`/editProduct/${product.id}`)" class="btn btn-primary">Edit</button>
                  <button @click="deleteProduct (product.id)" class="btn btn-danger">Delete</button>
              </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import axios from '../axios/axiosInstance'
export default {
  name: 'Dashboard',
  data () {
    return {
      products: []
    }
  },
  props: {
    msg: String
  },
  methods: {
    changePage (path) {
      this.$router.push(`/${path}`)
    },
    fetchProduct () {
      axios({
        url: '/products',
        method: 'GET',
        headers: {
          access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2MDQ5ODM2OTV9.MglsVyEckK4Wd5F5Qkf8xdd70R6L6RW3AkV6kdbE77w'
        }
      })
        .then(({ data }) => {
          this.email = data.loggedInUser
          this.products = data.productList
          console.log(this.products)
        })
        .catch(err => {
          console.log(err.response.data, 'fetch product')
        })
    },
    deleteProduct (id) {
      console.log(id)
      axios({
        url: `/products/${id}`,
        method: 'DELETE',
        headers: {
          access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2MDQ5ODM2OTV9.MglsVyEckK4Wd5F5Qkf8xdd70R6L6RW3AkV6kdbE77w'
        }
      })
        .then(({ data }) => {
          // this.$router.push('/')
          this.fetchProduct()
        })
        .catch(err => {
          console.log(err.response.data)
        })
    }
  },
  created () {
    this.fetchProduct()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  /* .img-thumbnail {
    padding: .25rem;
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: .25rem;
  }
  .img-fluid, .img-thumbnail {
    max-width: 100%;
    height: auto;
  } */
  .w-20 {
    width: 20%!important;
  }
</style>
