<template>
  <div class="dashboard">
    <div class="d-flex justify-content-center navbar">
      <p class="navbar-title">
        DASHBOARD
      </p>
    </div>
    <div class="container mt-5">
      <div class="mt-4 row row-cols-3">
        <ContentProduct
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ContentProduct from './ContentProduct'

export default {
  name: 'Dashboard',
  components: {
    ContentProduct
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

<style scoped>
.navbar {
  background: #2c393f;
  color: white;
  height: 7vh;
}
.navbar-title {
  font-size: 20px;
  margin: auto;
}
.dashboard {
  background: #ededed;
  height: 100vh;
}

</style>
