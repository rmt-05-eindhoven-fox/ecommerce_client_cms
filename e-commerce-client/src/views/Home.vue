<template>
  <div class="container">
    <div class="content">
      <form>
        <div class="form-group">
          <input v-model="searchInput" type="text" class="form-control" placeholder="Filter by Name" aria-describedby="emailHelp">
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
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ProductCard from '@/components/ProductCard.vue'
import axios from '@/axios/axiosInstance'

export default {
  name: 'Home',
  components: {
    // HelloWorld
    ProductCard
  },
  data () {
    return {
      products: [],
      searchInput: ''
    }
  },
  computed: {
    productsFilter () {
      if (this.searchInput) {
        return this.products.filter(el => el.name.toLowerCase().includes(this.searchInput.toLowerCase()))
      } else {
        return this.products
      }
    }
  },
  methods: {
    fetchProducts () {
      const accessToken = localStorage.getItem('access_token')
      axios({
        url: '/product',
        method: 'get',
        headers: {
          access_token: accessToken
        }

      })
        .then(({ data }) => {
          // console.log(data)
          this.products = data
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
