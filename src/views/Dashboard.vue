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
      <SuccessMsg v-if="isShow" :successMsg="successMsg" />
      <h3 class="text-center" v-if="!isLoad">Please Wait....</h3>
      <div class="row list-product">
        <!-- PRODUCT CARD -->
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @deleteProduct="deleteProduct"
        />
      </div>
    </div>
  </section>
</template>

<script>
import SuccessMsg from '@/components/SuccessMsg.vue'
import ProductCard from '@/components/ProductCard.vue'
import Sidebar from '@/components/Sidebar.vue'
import axios from '@/axios/axios.js'
export default {
  name: 'Dashboard',
  components: {
    ProductCard,
    Sidebar,
    SuccessMsg
  },
  data () {
    return {
      isShow: false,
      products: [],
      isLoad: false,
      successMsg: ''
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
    },
    deleteProduct (id) {
      const token = localStorage.getItem('token')
      axios({
        url: `/product/${id}`,
        method: 'delete',
        headers: {
          token
        }
      })
        .then(({ data }) => {
          this.successMsg = data.message
          this.isShow = true
          this.getProduct()
        })
        .catch(err => {
          console.log(err.message)
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
