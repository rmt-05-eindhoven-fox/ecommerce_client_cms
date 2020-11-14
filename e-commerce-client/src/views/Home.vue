<template>
  <div class="container">
    <Navbar></Navbar>
    <!-- <router-view></router-view> -->
    <ProductList />

  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '../components/ProductList'
import Navbar from '../components/Navbar'

export default {
  name: 'Home',
  components: {
    Navbar,
    ProductList
  },
  methods: {
  }
}
</script>

<style>

</style>
