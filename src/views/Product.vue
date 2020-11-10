<template>
  <div class="shadow rounded container rounded-lg">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between mb-6">
      <a class="navbar-brand" href="">Products</a>
      <div class="dropdown">
        <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-skull">Username</i>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="" @click.prevent="Logout"><i class="fa fa-sign-out-alt"></i>Logout</a>
        </div>
      </div>
    </nav>
    <div class="container mt-5">
      <ListofProducts/>
    </div>
  </div>
</template>

<script>
import ListofProducts from '../components/ListofProducts.vue'
export default {
  name: 'Product',
  methods: {
    Logout () {
      localStorage.clear()
      this.$router.push('Login')
    }
  },
  components: {
    ListofProducts
  }
}
</script>
