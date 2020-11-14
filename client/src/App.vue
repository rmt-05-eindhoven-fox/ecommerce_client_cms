<template>
  <div id="app">
    <div id="nav" v-if="loginStatus == true">
      <ul>
        <li><router-link to="/dashboard">Dashboard </router-link></li>
        <li><router-link to="/add-product">Add Product </router-link></li>
        <li><router-link to="/banners">Banner </router-link></li>
        <li><router-link to="/add-banner">Add Banner </router-link></li>
      </ul>
      <a @click.prevent="logOut" class="logout" href="">Log Out</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    loginStatus () {
      return this.$store.state.loginStatus
    }
  },
  methods: {
    showNavBar () {
      this.show = this.loginStatus
    },
    logOut () {
      localStorage.clear()
      this.$store.commit('setNavBar', false)
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>
