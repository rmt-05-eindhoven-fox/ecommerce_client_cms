<template>
  <div class="container d-flex justify-content-center">
    <div class="mt-3">
      <p>Price: {{ product.price }}</p>
      <p>Stock: {{ product.stock }}</p>
      <p>Created: {{ product.createdAt.substr(0, 10) }}</p>
      <p>Updated: {{ product.updatedAt.substr(0, 10) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataProduct',
  computed: {
    product () {
      return this.$store.state.product
    }
  }
}
</script>

<style>

</style>
