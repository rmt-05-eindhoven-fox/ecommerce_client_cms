<template>
  <div id="app">
    <div id="navigation" v-if="isLogin == true">
      <ul>
        <li><router-link to="/dashboard">Dashboard </router-link></li>
        <li><router-link to="/add-product">Add Product</router-link></li>
      </ul>
      <a @click.prevent="logOut" class="logout" href="">Logout</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  methods: {
    logOut () {
      localStorage.clear()
      this.$store.commit('SET_LOGINSTATUS', false)
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
