<template>
  <div class="dashboard">
    <div class="d-flex justify-content-around navbar">
      <div></div>
      <p class="navbar-title">
        DASHBOARD
      </p>
      <button @click="logout" class="btn btn-danger">Logout</button>
    </div>
    <div class="container mt-5">
      <div class="mt-4 row row-cols-2">
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
      this.$loading(true)
      setTimeout(() => {
        this.$store.dispatch('fetchProducts')
        this.$loading(false)
      }, 500)
    },
    logout () {
      localStorage.clear()
      this.$router.push('/')
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style scoped>
.row {
  max-height: 80vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
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
.container {
  width: 70vw;
}
img {
  width: 50px;
}
</style>
