<template>
  <section class="dashboard">
    <!-- SIDEBAR -->
    <div class="sidebar-sticky pt-3 sb">
    <div class="user-login">
      <p>Welcome,<br /><strong>Dicky Andeyan</strong></p>
      <small>Logged in as Admin</small>
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
        <a class="nav-link" href="" @click.prevent="logout">
          Logout
        </a>
      </li>
    </ul>
  </div>
    <div class="main-dash">
      <!-- LIST PRODUCT -->
      <!-- PRODUCT CARD -->
      <ProductCard v-if="!isShow"/>
      <!-- PRODUCT FORM -->
      <AddForm v-else />
    </div>
  </section>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import AddForm from '@/components/AddForm.vue'
export default {
  name: 'Dashboard',
  components: {
    ProductCard,
    AddForm
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    }
  }
}

</script>

<style>
</style>
