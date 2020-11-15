<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">No</th>
        <th scope="col">Product Name</th>
        <th scope="col">Price</th>
        <th scope="col">Stock</th>
        <th scope="col">Test</th>
        </tr>
    </thead>
    <tbody>
      <tr v-for="(product,i) in products" :key="i">
        <th scope="row">{{i+1}}</th>
        <td style="display: flex; justify-content: space-around; align-items: center;">
          <img :src="`${product.image_url}`" style="width: 7rem;">
          <p>{{product.name}}</p>
        </td>
        <td>{{product.price}}</td>
        <td>{{product.stock}}</td>
        <td>
          <a @click.prevent="deleteProduct(product.id)" href=""><i class="fas fa-trash"></i></a>
          <a @click.prevent="goToEdit(product.id)"  href=""><i class="fas fa-pen"></i></a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ListProduct',
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    },
    goToEdit (id) {
      this.$router.push(`/dashboard/editProduct/${id}`)
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.fetchProduct()
  }
}
</script>

<style>

</style>
