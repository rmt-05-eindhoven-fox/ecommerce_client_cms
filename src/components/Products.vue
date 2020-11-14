<template>
  <div class="bg-dark w-100 d-flex justify-content-center align-items-center">
    <div class="shadow rounded bg-light" style="height: 95%; width: 95%;">
      <div class="row mx-3 mt-2 justify-content-center">
        <div class="h1">Products</div>
      </div>
      <div class="mx-3 p-2 overflow-auto shadow rounded bg-secondary" style="height: 83vh;">
        <CardProduct v-for="product in products" :key="product.id" :product="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CardProduct from '../components/CardProduct'

export default {
  name: 'Products',
  components: {
    CardProduct
  },
  computed: mapState(['products']),
  mounted () {
    this.$store.dispatch('products')
  }
}
</script>

<style>

</style>
