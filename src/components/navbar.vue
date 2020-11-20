<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item active">
            <router-link class="nav-link" to="/Home">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/AddProductForm">add product</router-link>
        </li>
      </ul>
    </div>
    <div class="collapse navbar-collapse justify-content-end">
      <ul class="navbar-nav">
        <li class="nav-item active" @click="signout">
            <router-link class="nav-link" to="/">SignOut</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    signout () {
      localStorage.removeItem('token')
      this.$swal('Bye! See you again!')
    }
  }
}
</script>

<style>

</style>
