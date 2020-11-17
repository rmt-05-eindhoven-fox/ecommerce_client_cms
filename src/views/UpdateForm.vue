<template>
  <div>
    <Sidebar />
    <div class="product-form">
      <div class="page-title col-12">
        <h1>Update Product</h1>
        <p>Update selected product</p>
      </div>
      <div class="col-lg-6">
        <SuccessMsg v-if="isSuccess" :successMsg="successMsg" />
        <ErrorMsg v-if="isError" :errorMsg="errorMsg" />
        <form @submit.prevent="updateProduct">
          <div class="form-group">
            <input
              v-model="name"
              type="text"
              class="form-control"
              id="prod-name"
              placeholder="Product Name"
              autocomplete="off"
            />
          </div>
          <div class="form-group">
            <input
              v-model="image_url"
              type="url"
              class="form-control"
              id="image-url"
              placeholder="Image URL"
              autocomplete="off"
            />
          </div>
          <div class="form-group">
            <input
              v-model="price"
              type="number"
              class="form-control"
              id="image-url"
              placeholder="Price"
              min="0"
              autocomplete="off"
            />
          </div>
          <div class="form-group">
            <input
              v-model="stock"
              type="number"
              class="form-control"
              id="image-url"
              placeholder="Stock"
              min="0"
              autocomplete="off"
            />
          </div>
          <button type="submit" class="btn btn-custom">Update Product</button>
          <button type="button" class="btn btn-dark" @click="backToDash">
            Cancel
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import SuccessMsg from '@/components/SuccessMsg.vue'
import ErrorMsg from '@/components/ErrorMsg.vue'
import axios from '@/axios/axios.js'
export default {
  name: 'UpdateProduct',
  components: {
    Sidebar,
    SuccessMsg,
    ErrorMsg
  },
  data () {
    return {
      products: [],
      name: '',
      image_url: '',
      price: '',
      stock: '',
      isSuccess: false,
      isError: false,
      successMsg: '',
      errorMsg: ''
    }
  },
  methods: {
    backToDash () {
      this.$router.push('/dashboard')
    },
    getProductById () {
      const id = this.$route.params.id
      const token = localStorage.getItem('token')
      axios({
        url: `/product/${id}`,
        method: 'get',
        headers: {
          token
        }
      })
        .then(({ data }) => {
          this.name = data.name
          this.image_url = data.image_url
          this.stock = data.stock
          this.price = data.price
          this.products.push(data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateProduct () {
      this.isSuccess = false
      this.isError = false
      const id = this.$route.params.id
      const token = localStorage.getItem('token')
      axios({
        url: `product/${id}`,
        method: 'put',
        data: {
          name: this.name,
          image_url: this.image_url,
          stock: this.stock,
          price: this.price
        },
        headers: {
          token
        }
      })
        .then(({ data }) => {
          this.isSuccess = true
          this.isError = false
          this.successMsg = data.message
          this.name = ''
          this.image_url = ''
          this.stock = ''
          this.price = ''
        })
        .catch(err => {
          this.isError = true
          this.isSuccess = false
          this.errorMsg = err.response.data.message
        })
    }
  },
  created () {
    this.getProductById()
  }
}
</script>

<style>
</style>
