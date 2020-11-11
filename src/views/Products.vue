<template>
  <div class="products">
    <h1>This is an products page</h1>
    <div class="container">
      <div class="row">
        <ProductCard
          class="col-3"
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'Products',
  data: function () {
    return {
    }
  },
  components: {
    ProductCard
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.fetchProducts()
  },
  beforeRouteEnter (to, from, next) {
    console.log(to)
    console.log(from)
    console.log(next)
    next()
  }
}
</script>

<style>

</style>
