<template>
  <div class="dashboard">
    <div class="d-flex justify-content-center navbar">
      <p class="navbar-title">
        DASHBOARD
      </p>
    </div>
    <div class="row mt-4">
      <Product/>
    </div>
  </div>
</template>

<script>
import Product from './ContentProduct'

export default {
  name: 'Dashboard',
  components: {
    Product
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
.card {
  width: 100%;
  margin: 0 15px;
}
.row {
  width: 100%;
  padding-left: 25px;
}

</style>
