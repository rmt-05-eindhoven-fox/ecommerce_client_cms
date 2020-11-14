<template>
  <div>
    <Sidebar />
    <div class="product-form">
      <div class="page-title">
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
          <button class="btn btn-custom">Update Product</button>
          <button type="button" class="btn btn-dark ml-2" @click="backToDash">
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
// import axios from '@/axios/axios.js'
export default {
  name: 'UpdateProduct',
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
    backToDash () {
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style>
</style>
