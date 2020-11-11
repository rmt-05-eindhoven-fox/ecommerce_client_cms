<template>
  <nav class="navbar navbar-dark bg-dark">
    <ul class="nav nav-tabs">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Bintang Wibawa</a>
        <div class="dropdown-menu">
          <div class="dropdown-divider"></div>
          <a @click.prevent="logout" class="dropdown-item" href="#">Logout</a>
        </div>
      </li>
      <li class="nav-item">
        <a @click.prevent="goToAddProduct" class="nav-link" href="#">Add Product</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavbarDashboard',
  methods: {
    logout () {
      localStorage.removeItem('access_token')
      this.$router.push('Login')
    },
    goToAddProduct () {
      this.$router.push({ name: 'AddProduct' })
    }
  }
}
</script>

<style>

</style>
