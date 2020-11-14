<template>
  <div class="content">
  <form>
    <div class="form-group">
      <input v-model="searchInput" type="text" class="form-control" placeholder="Search Product" aria-describedby="emailHelp">
    </div>
  </form>
  <ul class="list-group list-group-flush">
    <ProductCard
      v-for="product in productsFilter"
      :key="product.id"
      :productDetail="product"
    ></ProductCard>
  </ul>

</div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import { mapActions } from 'vuex'

export default {
  name: 'ProductList',
  components: {
    ProductCard
  },
  data () {
    return {
      // products: [],
      searchInput: ''
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    productsFilter () {
      if (this.searchInput) {
        return this.products.filter(el => el.name.toLowerCase().includes(this.searchInput.toLowerCase()))
      } else {
        return this.products
      }
    }
  },
  methods: {
    ...mapActions({
      storeFetchProducts: 'fetchProducts'
    }),
    fetchProducts () {
      this.storeFetchProducts()
        .then(({ data }) => {
          this.$store.commit('setProducts', data)
          // this.products = data
        })
        .catch(error => {
          console.log(error.response.status)
        })
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>

</style>
