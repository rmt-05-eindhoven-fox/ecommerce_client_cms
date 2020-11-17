<template>
  <section class="dashboard">
    <!-- SIDEBAR -->
    <Sidebar />
    <div class="main-dash">
      <!-- LIST PRODUCT -->
      <div class="page-title">
        <h1>Dashboard</h1>
        <p>Recently added product</p>
      </div>
      <SuccessMsg v-if="isShow" :successMsg="successMsg" />
      <h3 class="text-center text-muted" v-if="!doneLoad">Please Wait....</h3>
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
      successMsg: ''
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    doneLoad () {
      return this.$store.state.isLoad
    }
  },
  methods: {
    getProduct () {
      this.$store.dispatch('getProduct')
    },
    deleteProduct (id) {
      const payload = {
        token: localStorage.getItem('token'),
        id
      }
      this.$store.dispatch('deleteProduct', payload)
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
  },
  beforeRouteEnter (to, from, next) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/')
    }
  }
}
</script>

<style>
</style>
