<template>
  <div class="dashboard">
    <!-- NAVBAR DASHBOARD -->
    <NavbarDashboard/>
    <!-- NAVBAR DASHBOARD -->

    <!-- PRODUCTS -->
    <div class="container my-5 pb-5">
      <div class="row">
        <div class="col d-flex justify-content-between">
          <h2>Product List</h2>
          <div class="form-group">
            <select v-model="selectedCategory" class="form-control">
              <option value="">All Products</option>
              <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}</option>
            </select>
          </div>
          <div>
            <button @click.prevent="goToCreateProduct()" class="btn btn-primary btn-sm"><i class="fas fa-plus"></i> Create Product</button>
            <button @click.prevent="goToCreateCategory()" class="btn btn-warning btn-sm ml-2"><i class="fas fa-plus"></i> Create Category</button>
          </div>
        </div>
      </div><br>
      <div class="container mx-2">
        <Products
        v-for="product in products"
        :key="product.id"
        :product="product"
        />
      </div>
    </div>
    <!-- PRODUCTS -->
  </div>
</template>

<script>
import NavbarDashboard from '../components/NavbarDashboard'
import Products from '../components/Products'

export default {
  name: 'Dashboard',
  components: {
    NavbarDashboard,
    Products
  },
  data () {
    return {
      // Filter
      selectedCategory: ''
    }
  },
  computed: {
    products () {
      if (this.selectedCategory) {
        return this.$store.getters.filteredProductsByCategory(this.selectedCategory)
      } else {
        return this.$store.state.products
      }
    },
    categories () {
      return this.$store.state.categories
    }
  },
  methods: {
    readProducts () {
      this.$store.dispatch('readProducts')
    },
    readCategories () {
      this.$store.dispatch('readCategories')
    },
    goToCreateProduct () {
      this.$router.push({ name: 'CreateProduct' })
    },
    goToCreateCategory () {
      this.$router.push({ name: 'CreateCategory' })
    }
  },
  created () {
    this.readProducts()
    this.readCategories()
  }
}
</script>

<style>

</style>
