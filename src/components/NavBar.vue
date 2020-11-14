<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/add">Add Products</router-link> |
    <button class="btn btn-warning" @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    logout () {
      localStorage.removeItem('access_token')
      this.$emit('logout')
    }
  }
}
</script>

<style scoped>

</style>
