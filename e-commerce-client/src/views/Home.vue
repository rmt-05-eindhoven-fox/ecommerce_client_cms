<template>
  <div class="container">
    <Navbar></Navbar>
    <!-- <router-view></router-view> -->

    <ProductList />
    <button @click='toastTest("hello")'>Toast test</button>
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
    toastTest () {
      // this.$vToastify.info('Easy as that')
      this.$store.dispatch('errToast', 'hello there!')
    }
  }
}
</script>

<style>

</style>
