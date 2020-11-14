<template>
  <div class="container m-4">
    <form @submit.prevent="addProduct" class="d-flex col card">
      <label class="mt-4" for="name">Name</label>
      <input class="mb-3" v-model="name" type="text" name="name" placeholder="Input Product Name">
      <label class="" for="image_url">Image</label>
      <input class="mb-3" v-model="image_url" type="text" name="image_url" placeholder="Input Product Image">
      <label class="" for="">Price</label>
      <input class="mb-3" v-model="price" type="number" name="price" placeholder="Input Price">
      <label class="" for="stock">Stock</label>
      <input class="mb-3" v-model="stock" type="number" name="stock" placeholder="Input Stock">
      <div>
        <button class="btn btn-primary col-3 mb-4" type="submit">Add</button>
      </div>
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
    async addProduct () {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addProduct', payload)
      this.$router.push('/products')
    }
  }
}
</script>

<style scoped>
  label {
    font-weight: bold;
  }
  .card {
    background-color: white;
  }
</style>
