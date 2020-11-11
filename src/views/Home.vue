<template>
  <div class="home">
    <!-- <HelloWorld :cek="25" msg="Welcome to Your Vue.js App"/> -->
    <Header />
    <Products />
  </div>
</template>

<script>
// @ is an alias to /src'
import Header from '@/components/Header.vue'
import Products from '@/components/CMSProducts.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Products
  }
}
</script>
