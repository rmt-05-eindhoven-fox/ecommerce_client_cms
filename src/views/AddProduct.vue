<template>
  <div class="container">
    <form @submit.prevent="addProduct">
      <label for="name">Name</label>
      <input v-model="name" type="text" name="name" placeholder="Input Product Name">
      <label for="image_url">Image</label>
      <input v-model="image_url" type="text" name="image_url" placeholder="Input Product Image">
      <label for="">Price</label>
      <input v-model="price" type="number" name="price" placeholder="Input Price">
      <label for="stock">Stock</label>
      <input v-model="stock" type="number" name="stock" placeholder="Input Stock">
      <button class="btn btn-primary" type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: null,
      stock: null
    }
  },
  methods: {
    addProduct () {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: +this.price,
        stock: +this.stock
      }
      this.$store.dispatch('addProduct', payload)
    }
  }
}
</script>

<style>

</style>
