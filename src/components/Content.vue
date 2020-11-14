<template>
  <div class="bg-blue-500 flex h-full w-full">
      <Navigation class="w-1/6 bg-blue-500 h-full"/>
      <div v-for="(product, i) in products" :key="i" class="flex-wrap h-auto">
          <ProductCard :product="product"/>
      </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'Content',
  data () {
    return {
    }
  },
  components: {
    Navigation,
    ProductCard
  },
  methods: {
  },
  computed: {
    products () {
      // console.log(this.$store.state.products, '<<ini computed')
      return this.$store.state.products
    }
  },
  mounted () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style>

</style>
