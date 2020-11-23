<template>
<div>
  <div class="container">
  <nav class="navbar navbar-expand-lg navbar-dark bg-warning">
    <a class="navbar-brand" href="" @click.prevent="toHome"><h1 class="text-dark">Ecommerce Admin</h1></a>
    <a @click.prevent="toBanner" class="navbar-brand"><button class="btn btn-primary">Banner</button></a>
    <a @click.prevent="logout" class="navbar-brand"><button class="btn btn-danger">Logout</button></a>
  </nav>
</div>
</div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      Swal.fire(
        'See you <3!'
      )
      this.$router.push('/login')
    },
    toBanner () {
      this.$router.push('/banner')
    },
    toHome () {
      this.$router.push('/')
    }
  }
}
</script>
