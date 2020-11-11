<template>
  <div>
    <NavbarDashboard/>
    <h1>Products Page</h1>
    <div class="productList">
      <div class="container">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <!-- Product Item -->
            <ProductItem
              v-for="(product, i) in products"
              :product="product"
              :num="i"
              :key="product.id"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarDashboard from '../components/NavbarDashboard'
import ProductItem from '../components/ProductItem'

export default {
  name: 'Products',
  components: {
    NavbarDashboard,
    ProductItem
  },
  data () {
    return {
    }
  },
  methods: {
    fetchProducts () {
      const accessToken = localStorage.getItem('access_token')
      this.$store.dispatch('fetchProducts', accessToken)
    }
  },
  created () {
    this.fetchProducts()
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style>

</style>
