<template>
    <div>
      <Navbar/>
    <div class="top-table align-content-end table-area">
        <ListProduct :products="products"/>
        <Footer/>
    </div>
    </div>
</template>

<script>
import ListProduct from '../components/ListProduct.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Product',
  components: {
    ListProduct,
    Navbar,
    Footer
  },
  computed: {
    products () {
      return this.$store.state.fetchProduct
    }
  },
  created () {
    this.$store.dispatch('fetchProduct')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-table {
  position: relative;
  top: 60px;
}
</style>
