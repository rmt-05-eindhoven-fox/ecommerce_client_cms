<template>
  <div class="content">
  <form>
    <div class="form-group">
      <input v-model="searchInput" type="text" class="form-control" placeholder="Search Product" aria-describedby="emailHelp">
    </div>
  </form>
  <ul class="list-group list-group-flush">
    <div
      v-if="loadComplete"
    >
      <ProductCard
        v-for="product in productsFilter"
        :key="product.id"
        :productDetail="product"
      ></ProductCard>
    </div>

    <div
      v-else
    >
      <BounceLoader class="mx-auto mt-5"/>
    </div>
  </ul>

</div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import { mapActions } from 'vuex'
import { BounceLoader } from '@saeris/vue-spinners'

export default {
  name: 'ProductList',
  components: {
    ProductCard,
    BounceLoader
  },
  data () {
    return {
      // products: [],
      searchInput: '',
      loadComplete: false
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
          this.loadComplete = true
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
