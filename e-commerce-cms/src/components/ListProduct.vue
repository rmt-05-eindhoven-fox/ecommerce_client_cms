<template>
  <div>
    <h2>List Product</h2>
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Image</th>
      <th scope="col">Price</th>
      <th scope="col">Stock</th>
      <th scope="col">Options</th>
    </tr>
  </thead>
  <DataProduct
  v-for="data in Product"
  :key="data.id"
  :product='data'
  ></DataProduct>
</table>
  </div>
</template>

<script>
import DataProduct from '../components/DataProduct'

export default {
  name: 'ListProduct',
  components: {
    DataProduct
  },
  computed: {
    Product () {
      return this.$store.state.Product
    }
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    }
  },
  created () {
    this.fetchProduct()
  }
}
</script>

<style>

</style>
