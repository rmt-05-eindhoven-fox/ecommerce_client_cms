<template>
  <div class = "container">
    <div class="row">
    <div class="col"></div>
    <div class="col-5">

      <div class="addProduct-container mb-5">
        <header>
          <h1>Add Product Form</h1>
        </header>
        <form>
            <div class="form-group">
              <input
                v-model="name"
                type="text" class="form-control" aria-describedby="emailHelp" placeholder="Product Name">
            </div>
            <div class="form-group">
              <input
                v-model="image_url"
                type="text" class="form-control" aria-describedby="emailHelp" placeholder="Image Url">
            </div>
            <div class="form-group">
              <input
                v-model="price"
                type="number" class="form-control" aria-describedby="emailHelp" placeholder="Price">
            </div>
            <div class="form-group">
              <input
                v-model="stock"
                type="number" class="form-control" aria-describedby="emailHelp" placeholder="Stock">
            </div>
            <button
              @click.prevent="addProduct"
              type="submit"
              class="btn mb-3 btn-primary w-100"
            >Submit</button>
        </form>

      </div>

    </div>
    <div class="col"></div>
  </div>
  </div>
</template>

<script>
import axios from '../axios/axiosInstance'

export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    addProduct () {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'post',
        url: '/product',
        data: {
          name: this.name,
          image_url: this.image_url,
          price: this.price,
          stock: this.stock
        },
        headers: {
          access_token: accessToken
        }
      })
        .then(({ data }) => {
          console.log('add success!')
        })
        .catch(error => {
          console.log(error.response)
        })
    }
  }

}
</script>

<style>

</style>
