<template>
  <div class="container m-3">
    <h3 class="mb-4">Are you sure?</h3>
    <button class="btn btn-danger mr-5" @click="deleteProduct(productId)">Yes</button>
    <button class="btn btn-secondary" @click="cancelDelete(productId)">No</button>
  </div>
</template>

<script>
export default {
  name: 'DeleteProduct',
  computed: {
    productId () {
      return this.$store.state.product.id
    }
  },
  methods: {
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
      this.$router.push('/products')
    },
    cancelDelete (id) {
      this.$router.push(`/detail/${id}/data-product`)
    }
  }
}
</script>

<style>

</style>
