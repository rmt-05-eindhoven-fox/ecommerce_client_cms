<template>
  <div class = "container">
    <Navbar></Navbar>
    <div class="row">
    <div class="col"></div>
    <div class="col-5">

      <div class="addProduct-container mb-5">
        <header class="header-add w-100">
          <img src="https://img.icons8.com/dusk/64/000000/product.png"/>
          <h3 class="mt-3">Add a New Product</h3>
        </header>
        <form
          @submit.prevent="addProduct"
        >
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
import Navbar from '../components/Navbar'

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
  components: {
    Navbar
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
          this.$store.dispatch('successToast', 'Add Product Successful')
          this.name = ''
          this.image_url = ''
          this.price = ''
          this.stock = ''
          this.$router.push({ name: 'Home' })
        })
        .catch(err => {
          this.$store.dispatch('errToast', err.response.data.message)
        })
    }
  }

}
</script>

<style>
header.header-add{
  margin: 0px 0px 20px 0px;
  padding: 30px 10px;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 7px;
}
</style>
