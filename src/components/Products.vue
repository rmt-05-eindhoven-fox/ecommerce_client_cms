<template>
  <div class="products">
    <div class="d-flex justify-content-between mx-4" :style="{ visibility: productsHeader }">
<button
@click="goToAddForm"
class="btn btn-primary mx-4"><i class="far fa-plus-square"></i> Add Product</button>
<button class="btn-primary-outline" data-toggle="tooltip" data-placement="top" title="Click trash to select all category">

<v-selectmenu
:data="getCategories"
key-field="id"
show-field="name"
v-model="category"
>
</v-selectmenu>
</button>

    </div>
  <div class="container-fluid pt-5">
<table
v-if="this.$route.path === '/home/products'"
class="table table-striped table-hover table-borderless">
  <thead class="thead-dark">
    <tr>
      <th class="text-center" scope="col">#</th>
      <th class="text-center" scope="col">Picture</th>
      <th class="text-center" scope="col">Name</th>
      <th class="text-center" scope="col">Price</th>
      <th class="text-center" scope="col">Stock</th>
      <th class="text-center" scope="col">Category</th>
      <th class="text-center" scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <Product
    v-for="(product, i) in getProducts"
    :key="product.id"
    :product="product"
    :number="i + 1">
    </Product>
  </tbody>
</table>
    <router-view
    v-else>

    </router-view>

  </div>
  </div>
</template>

<script>
import Product from './Product'

export default {
  name: 'Products',
  data () {
    return {
      category: ''
    }
  },
  components: {
    Product
  },
  beforeCreate () {
    this.$store.dispatch('fetchCategories')
    this.$store.dispatch('fetchAllProducts')
  },
  computed: {
    getProducts () {
      return this.$store.getters.getProductsByCategoryId(this.category)
    },
    getCategories () {
      return this.$store.state.categories
    },
    productsHeader () {
      return this.$store.state.productsHeader
    }
  },
  methods: {
    goToAddForm () {
      this.$router.push('/home/products/add')
    }
  }
}
</script>

<style scoped>
.btn-primary-outline {
  background-color: transparent;
  border-color: transparent;
}
</style>
