<template>
  <div>
    <Login v-if="pageName == 'login'"></Login>
    <Home v-else-if="pageName == 'home'"></Home>
  </div>
</template>

<script>
import Login from './views/Login.vue'
import Home from './views/Home.vue'
export default {
  name: 'App',
  components: {
    Login, Home
  },
  data () {
    return {
      pageName: 'login'
    }
  },
  methods: {
    checkLogin () {
      if (localStorage.access_token) {
        this.pageName = 'home'
      } else {
        this.pageName = 'login'
      }
    }
  },
  created () {
    this.checkLogin()
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
