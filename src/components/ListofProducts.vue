<template>
  <div class="container">
    <h1>List of Products</h1>
    <button type="button" class="btn btn-light mb-3" data-toggle="modal" data-target="#modalAddProduct">Add Product</button>
    <AddProduct/>
    <table class="table table-dark text-align-center">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Category</th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <EachProduct
          v-for="(product, i) in products"
          :key="product.id"
          :no="i"
          :product="product"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import EachProduct from './EachProduct.vue'
import AddProduct from './AddProduct.vue'
export default {
  name: 'ListofProducts',
  components: {
    EachProduct,
    AddProduct
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    fetchCategory () {
      this.$store.dispatch('fetchCategory')
    },
    fetchBanner () {
      this.$store.dispatch('fetchBanner')
    }
  },
  created () {
    this.fetchProducts()
    this.fetchCategory()
    this.fetchBanner()
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style>
h1{
  text-align: center;
  color: white;
}
img{
  width: 200px;
}
</style>
