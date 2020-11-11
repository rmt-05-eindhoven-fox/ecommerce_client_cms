<template>
  <div class="container">
    <div class="text-center mt-5">
      <h1>Add Product</h1>
    </div>
    <div class="form-add mt-3">
      <form @submit.prevent="postAddProduct">
        <div class="form-group">
          <label for="name">Product Name</label>
          <input class="form-control" type="text" v-model="name" placeholder="eg: Macbook Air">
        </div>
        <div class="form-group">
          <label for="image_url">Image Url</label>
          <input class="form-control" type="url" v-model="image_url" placeholder="eg: https://static.bhphoto.com/images/images2500x2500/1562676695_1492875.jpg">
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input class="form-control" type="number" v-model="price" placeholder="eg: 12000">
        </div>
        <div class="form-group">
          <label for="stock">Stock</label>
          <input class="form-control" type="number" v-model="stock" placeholder="eg: 10">
        </div>
        <div>
          <button class="btn btn-primary" type="submit">Add</button>
        </div>
      </form>
    </div>
    <div class="cancel mt-2 mb-5">
      <button @click="toHome" class="btn btn-danger">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      pageName: 'addProduct',
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    toHome () {
      this.$router.push('/')
    },
    postAddProduct () {
      this.$store.dispatch('addProduct', {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      })
      this.$router.push('/')
    }
  }

}
</script>

<style>

</style>
