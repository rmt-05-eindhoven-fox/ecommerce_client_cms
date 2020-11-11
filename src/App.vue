<template>
  <div id="app">
    <div v-if="access_token">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/products">Products</router-link> |
        <router-link to="/add">Add Products</router-link>
      </div>
      <router-view/>
    </div>
    <div v-else>
      <LandingPage/>
      <!-- <router-link to="/login">Login</router-link> |
      <router-view/> -->
    </div>
  </div>
</template>

<script>
import LandingPage from './views/LandingPage.vue'

export default {
  data () {
    return {
      access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImVtYWlsIjoienhjQG1haWwuY29tIiwiaWF0IjoxNjA1MDgzODAxfQ.9Rw1sHZPNxJ1FVplWffWsmWmulZL3-hNnmCuUke7lwI'
    }
  },
  components: {
    LandingPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
