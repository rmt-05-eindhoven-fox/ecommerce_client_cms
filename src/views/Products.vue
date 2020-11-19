<template>
  <div>
    <NavbarDashboard/>
    <div class="container-fluid m-5 justify-content-center">
      <div class="row d-flex align-items-center">
        <div class="col-auto">
          <div class="card">
            <div class="card-body">
              <h1 class="text-center my-3">Product List</h1>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">Category</label>
                </div>
                <select v-model="selectedCategory" class="custom-select" id="inputGroupSelect01">
                  <option value="">All category</option>
                  <option v-for="category in categories"
                    :key="category.id"
                    :value="category.id">
                    {{ category.name }}
                  </option>
                </select>
              </div>
              <div v-show="products">
                <table class="table">
                  <thead >
                    <tr>
                      <th scope="col">Item-ID</th>
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
                      v-for="product in products"
                      :product="product"
                      :key="product.id"
                    />
                  </tbody>
                </table>
              </div>
              <div v-show="products.length === 0" class="alert alert-info" role="alert">
                <h4>
                  Product still empty
                </h4>
              </div>
            </div>
          </div>
        </div>
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
      selectedCategory: ''
    }
  },
  methods: {
    fetchProducts () {
      const accessToken = localStorage.getItem('access_token')
      this.$store.dispatch('fetchProducts', accessToken)
    },
    fetchCategories () {
      this.$store.dispatch('fetchCategories')
    }
  },
  created () {
    const accesToken = localStorage.getItem('access_token')
    if (!accesToken) {
      this.$router.push({ name: 'Login' })
    } else {
      this.fetchProducts()
      this.fetchCategories()
    }
  },
  computed: {
    products () {
      let products = this.$store.state.products
      if (this.selectedCategory) {
        products = products.filter(product => product.CategoryId === this.selectedCategory)
      }
      return products
    },
    categories () {
      return this.$store.state.categories
    }
  },
  watch: {
    selectedCategory () {
      console.log(this.selectedCategory)
    }
  }
}
</script>

<style>

</style>
