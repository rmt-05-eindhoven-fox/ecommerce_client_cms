<template>
  <section class="dashboard">
    <!-- SIDEBAR -->
    <Sidebar />
    <div class="main-dash">
      <!-- LIST PRODUCT -->
      <div class="page-title">
        <h1>Dashboard</h1>
        <p>Recent added product</p>
      </div>
      <h3 class="text-center" v-if="!isLoad">Please Wait....</h3>
      <div class="row list-product">
        <!-- PRODUCT CARD -->
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import Sidebar from '@/components/Sidebar.vue'
import axios from '@/axios/axios.js'
export default {
  name: 'Dashboard',
  components: {
    ProductCard,
    Sidebar
  },
  data () {
    return {
      isShow: false,
      products: [],
      isLoad: false
    }
  },
  methods: {
    getProduct () {
      const token = localStorage.getItem('token')
      axios({
        url: '/product',
        method: 'get',
        headers: {
          token
        }
      })
        .then(({ data }) => {
          this.products = data
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          this.isLoad = true
        })
    }
  },
  created () {
    this.getProduct()
  }
}
</script>

<style>
</style>
