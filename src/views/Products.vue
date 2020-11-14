<template>
  <div class="products">
    <NavBar />
    <h1>Products</h1>
    <div class="container">
      <div class="row">
        <div class="col-12">embed </div>
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          class="ml-3"
          @fetchProducts=fetchProducts
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../axios/axiosInstance'
import ProductCard from '../components/ProductCard.vue'
import NavBar from '../components/NavBar.vue'

export default {
  name: 'Product',
  data () {
    return {
      products: []
    }
  },

  components: {
    ProductCard,
    NavBar
  },
  methods: {
    fetchProducts () {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'get',
        url: '/products',
        headers: { access_token: token }
      })
        .then(({ data }) => {
          console.log(data)
          this.products = data
        })
        .catch(err => console.log(err))
        // this.$store.dispatch('fetchProducts')
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style scoped>

</style>
