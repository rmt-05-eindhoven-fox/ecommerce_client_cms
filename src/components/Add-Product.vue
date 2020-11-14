<template>
  <div class="form">
    <form @submit.prevent="addProduct">
      <div class="form-group">
        <label for="name">Name:</label>
        <input class="form-control" v-model="name" type="text" name="name" id="name">
      </div>
      <div class="form-group">
        <label for="image_url">Image URL:</label>
        <input class="form-control" v-model="imageUrl" type="text" name="image_url" id="image_url">
      </div>
      <div class="form-row">
      <div class="form-group col-md-6">
        <label for="price">Price:</label>
        <input class="form-control" v-model="price" type="number" name="price" id="price">
      </div>
      <div class="form-group col-md-6">
        <label for="stock">Stock:</label>
        <input class="form-control" v-model="stock" type="number" name="stock" id="stock">
      </div>
      </div>
      <button class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      imageUrl: '',
      price: 0,
      stock: 0
    }
  },
  methods: {
    addProduct () {
      const payload = {
        name: this.name,
        imageUrl: this.imageUrl,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addProduct', payload)
      this.$router.push('/dashboard/product')
    }
  }
}
</script>

<style scoped>

</style>
