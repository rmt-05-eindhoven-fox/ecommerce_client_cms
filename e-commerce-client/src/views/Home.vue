<template>
  <div class="container">
    <Navbar></Navbar>
    <!-- <router-view></router-view> -->

    <ProductList />

    <!-- <div class="content">
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

    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '../components/ProductList'
import Navbar from '../components/Navbar'

export default {
  name: 'Home',
  components: {
    Navbar,
    ProductList
  }
}
</script>

<style>

</style>
