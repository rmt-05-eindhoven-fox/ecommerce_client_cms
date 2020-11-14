<template>
  <div id="dashboard">
    <h1 class="page-title" style="font-size: 50px; margin-top: 30px">Dashboard</h1>
    <div style="margin-top: 70px;">
      <div
        style="
          display: flex;
          justify-content: space-between;
          width: 600px;
          margin-left: 600px;
          font-size: 26px;
          font-weight: bold;
        "
      >
        <p>Name</p>
        <p>Price</p>
        <p>Stock</p>
        <p>Category</p>
      </div>
    </div>
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    <router-view />
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue'
export default {
  name: 'Dashboard',
  components: {
    ProductItem
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>
