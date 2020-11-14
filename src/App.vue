<template>
  <div id="app">
    <div v-if="pageName === 'main-page'">
      <MainPage
        @logout="logout"
      />
    </div>
    <div v-else-if="pageName === 'landing-page'">
      <LandingPage
        @login="login"
      />
    </div>
  </div>
</template>

<script>
import LandingPage from './views/LandingPage.vue'
import MainPage from './views/MainPage.vue'

export default {
  name: 'App',
  data () {
    return {
      pageName: localStorage.getItem('access_token') ? 'main-page' : 'landing-page'
    }
  },
  components: {
    LandingPage, MainPage
  },
  methods: {
    login () {
      this.pageName = 'main-page'
    },
    logout () {
      this.pageName = 'landing-page'
    }
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
  background-color: lightgreen;
  height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav button {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
