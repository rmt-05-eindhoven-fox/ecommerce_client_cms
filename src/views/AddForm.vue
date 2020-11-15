<template>
  <div>
    <Sidebar />
    <div class="product-form col-12">
      <div class="page-title">
        <h1>Add Product</h1>
        <p>Add new product</p>
      </div>
      <div class="col-lg-6">
        <SuccessMsg v-if="isSuccess" :successMsg="successMsg" />
        <ErrorMsg v-if="isError" :errorMsg="errorMsg" />
        <form @submit.prevent="addProduct">
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
          <button class="btn btn-custom">Add Product</button>
          <button type="reset" class="btn btn-dark ml-2">Cancel</button>
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
  name: 'AddForm',
  components: {
    Sidebar,
    SuccessMsg,
    ErrorMsg
  },
  data () {
    return {
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
    addProduct () {
      const token = localStorage.getItem('token')
      axios({
        url: '/product',
        method: 'post',
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
          console.log(data.message)
          this.isSuccess = true
          this.isError = false
          this.successMsg = data.message
          this.name = ''
          this.image_url = ''
          this.price = ''
          this.stock = ''
        })
        .catch(err => {
          this.isError = true
          this.isSuccess = false
          this.errorMsg = err.response.data.message
        })
    }
  }
}
</script>

<style>
</style>
