<template>
  <div class="container">
    <h1> Add New Products </h1>
      <div class="d-flex mx-auto animated slideInDown" style="min-height: 100%">
    <img src="../assets/undraw_add_to_cart_vkjp.svg"  alt="login-page" style="margin-left:350px; width:400px;height:400px;">
       </div>
    <hr>
    <form @submit.prevent="processAddProduct">
      <div class="container animated slideInDown">
      <p class="text-danger"> {{this.$store.state.errMsg}}</p>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"> Name </span>
          </div>
          <input v-model="name" type="text" class="form-control" placeholder="Enter Your Product Name"
          aria-label="Name" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"> Image Url </span>
          </div>
          <input v-model="image_url" type="text" class="form-control" placeholder="Enter the URL for your product image"
          aria-label="Image Url" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"> Price </span>
          </div>
          <input v-model="price" type="text" class="form-control" placeholder="Enter the price"
          aria-label="price" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"> Stock </span>
          </div>
          <input v-model="stock" type="text" class="form-control" placeholder="Enter the stock"
          aria-label="stock" aria-describedby="basic-addon1">
        </div>
      </div>
      <button type="submit" class="btn btn-primary"><i class="fas fa-save"></i> Add New Product </button>
    </form>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data() {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: '',
      nameUpdate: '',
      image_urlUpdate: '',
      priceUpdate: '',
      stockUpdate: '',
    }
  },
  created() {
  },
  methods: {
    increment() {
      this.$store.commit('INCREMENT')
    },
    processAddProduct() {
      const newData = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
      }
      this.showformAdd = false;
      this.$store.dispatch('processAddProduct', newData)
    },
  },
}
</script>

<style>
  h1{
    font-family: 'Lobster', cursive;
    font-size: 40pt;
  }
</style>
