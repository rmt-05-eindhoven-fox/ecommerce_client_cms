<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
::-webkit-scrollbar {
  display: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: "Poppins", sans-serif;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 1.2rem;
}

#nav {
  margin-top: 8px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #ff5252;
}

.md-app {
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  border: 1px solid rgba(#000, .12);
}

.md-app-content {
  background-color: #f5f5f5 !important;
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>

<script>
export default {
  name: 'App',
  data: () => ({
    menuVisible: false
  })
}
</script>
