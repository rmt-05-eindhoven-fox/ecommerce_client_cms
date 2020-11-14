<template>
  <div class="Category-Product">
    <ProductsContent
    :products='products'
    :title='title'
    ></ProductsContent>
  </div>
</template>

<script>
import ProductsContent from '../components/ProductsContent'

export default {
  name: 'CategoryProduct',
  components: {
    ProductsContent
  },
  data () {
    return {
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    title () {
      return this.$store.state.currentCategory
    }
  },
  methods: {
    fetchProducts () {
      const payload = this.$route.params.id
      this.$store.dispatch('fetchCategoryProducts', payload)
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>

</style>
