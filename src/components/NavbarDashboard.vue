<template>
  <nav class="navbar navbar-dark bg-dark">
    <div>
      <span class="navbar-brand">Ecommerce-hacktiv (admin)</span>
    </div>
    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Products</a>
          <div class="dropdown-menu">
            <a @click.prevent="$router.push({ name: 'Products' })" class="dropdown-item" href="#">Products</a>
            <div class="dropdown-divider"></div>
            <a @click.prevent="goToAddProduct" class="dropdown-item" href="#">Add Product</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categories</a>
          <div class="dropdown-menu">
            <a @click.prevent="$router.push({ name: 'Categories' })" class="dropdown-item" href="#">Categories</a>
            <a @click.prevent="$router.push({ name: 'AddCategory' })" class="dropdown-item" href="#">Add Category</a>
          <div class="dropdown-divider"></div>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Banners</a>
          <div class="dropdown-menu">
            <a @click.prevent="$router.push({ name: 'Banners' })" class="dropdown-item" href="#">Banners</a>
            <a @click.prevent="$router.push({ name: 'AddBanner' })" class="dropdown-item" href="#">Add Banner</a>
          <div class="dropdown-divider"></div>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{{ user }}</a>
          <div class="dropdown-menu">
            <div class="dropdown-divider"></div>
            <a @click.prevent="logout" class="dropdown-item" href="#">Logout</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'NavbarDashboard',
  methods: {
    logout () {
      Swal.fire({
        title: 'Are you sure want to logout',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Logout'
      })
        .then((result) => {
          if (result.isConfirmed) {
            localStorage.removeItem('access_token')
            this.$router.push({ name: 'Login' })
            Swal.fire('Logged out!', '', 'success')
          }
        })
    },
    goToAddProduct () {
      this.$router.push({ name: 'AddProduct' })
    }
  },
  computed: {
    user () {
      const email = localStorage.getItem('email')
      return email
    }
  }
}
</script>

<style>

</style>
