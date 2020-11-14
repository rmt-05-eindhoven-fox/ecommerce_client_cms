<template>
  <div class="products m-2">
    <div class="row products-card d-flex justify-content-center m-1">
      <ProductCard
        class="col-3 m-1"
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
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
  }
  // beforeRouteEnter (to, from, next) {
  //   console.log(to)
  //   console.log(from)
  //   console.log(next)
  //   next()
  // }
}
</script>

<style>
  .products-card {
    width: 100%;
    height: 530px;
    overflow: scroll;
  }
</style>
