<template>
  <section class="dashboard">
    <!-- SIDEBAR -->
    <div class="sidebar-sticky pt-3 sb">
      <div class="user-login">
        <p>
          Welcome,<br /><strong>{{ loggedInUser }}</strong>
        </p>
      </div>
      <ul class="nav flex-column">
        <p
          class="font-weight-bold pl-2"
          style="color: #333399; background-color: #ffffff"
        >
          Navigation
        </p>
        <li class="nav-item">
          <a class="nav-link" href="" @click.prevent="isShow = false">
            Dashboard
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="" @click.prevent="isShow = true">
            Add Products
          </a>
        </li>
        <li class="nav-item mt-5">
          <a class="nav-link" href="" @click.prevent="logout"> Logout </a>
        </li>
      </ul>
    </div>
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
      <!-- PRODUCT FORM -->
      <AddForm v-if="isShow" />
    </div>
  </section>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import AddForm from '@/components/AddForm.vue'
import axios from '@/axios/axios.js'
export default {
  name: 'Dashboard',
  components: {
    ProductCard,
    AddForm
  },
  data () {
    return {
      isShow: false,
      products: [],
      isLoad: false,
      loggedInUser: localStorage.getItem('full_name')
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
          console.log(data)
          this.products = data
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          this.isLoad = true
        })
    },
    logout () {
      localStorage.clear()
      this.$router.push('/')
    }
  },
  created () {
    this.getProduct()
  }
}
</script>

<style>
</style>
