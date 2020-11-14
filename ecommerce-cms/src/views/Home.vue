<template>
  <div>
    <div>
      <Navbar></Navbar>
    </div>
    <div>
      <div class="home" id="home">
        <div class="container d-flex flex-wrap">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :productData="product"
          ></ProductCard>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src

import ProductCard from '@/components/ProductCard.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    ProductCard,
    Navbar
  },
  data () {
    return {
      img: 'https://i.ibb.co/x8yrrJJ/carrepmu.jpg'
    }
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
