<template>
  <div class="container">
    <form @submit.prevent="updateProduct" class="d-flex row m-2">
      <label class="col-3" for="name">Name</label>
      <input class="col-9 mb-1" v-model="prod.name" type="text" name="name" placeholder="Input Product Name">
      <label class="col-3" for="image_url">Image</label>
      <input class="col-9 mb-1" v-model="prod.image_url" type="text" name="image_url" placeholder="Input Product Image">
      <label class="col-3" for="">Price</label>
      <input class="col-9 mb-1" v-model="prod.price" type="number" name="price" placeholder="Input Price">
      <label class="col-3" for="stock">Stock</label>
      <input class="col-9 mb-1" v-model="prod.stock" type="number" name="stock" placeholder="Input Stock">
      <div class="col-12 mt-3 ">
        <button class="btn btn-warning mr-5" type="submit">Update</button>
        <button @click="cancelUpdate(product.id)" class="btn btn-secondary">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditProduct',
  data () {
    return {
    }
  },
  methods: {
    updateProduct () {
      const payload = {
        id: this.prod.id,
        name: this.prod.name,
        image_url: this.prod.image_url,
        price: this.prod.price,
        stock: this.prod.stock
      }
      this.$store.dispatch('updateProduct', payload)
      this.$router.push(`/detail/${payload.id}/data-product`)
    },
    cancelUpdate (id) {
      this.$router.push(`/detail/${id}/data-product`)
    }
  },
  computed: {
    product () {
      return this.$store.state.product
    },
    prod () {
      return { ...this.product }
    }
  }
}
</script>

<style>

</style>
