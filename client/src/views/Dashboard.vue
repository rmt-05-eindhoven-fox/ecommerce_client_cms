<template>
  <div>
    <div id="nav">
      <ul>
        <li><router-link to='/dashboard'>Dashboard </router-link></li>
        <li><router-link to='/add-product'>Add Product </router-link></li>
      </ul>
      <a @click.prevent="logOut" class="logout" href="">Log Out</a>
    </div>
    <h1>Dashboard</h1>
    <ProductItem
    v-for="product in products"
    :key="product.id"
    :product="product"
     />
    <router-view/>
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
    },
    logOut () {
      localStorage.clear()
      this.$router.push({ name: 'Login' })
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>
