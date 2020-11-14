<template>
  <div id="app">
    <div v-if="loginStatus" class="sidenav shadow">
        <div id="home" class="row" style="width: 100%;">
          <h1>Admin Page</h1>
        </div>
        <hr>
        <router-link to="/"><span>Home</span></router-link>
        <br/><br/><br/>
        <button class="btn btn-dark" @click="logout">Logout</button>
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
    logout () {
      localStorage.clear()
      this.$store.commit('setStatus', false)
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>
<style>
#app {
  text-align: center;
}
.sidenav {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 12vw;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #ffffff;
    overflow-x: hidden;
    padding: 1.5%;
  }

  .sidenav span {
    cursor: pointer;
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 20px;
    color:black;
    display: block;
  }

  .sidenav span:hover {
    background-color: rgb(68, 147, 221);
  }
  #content{
    width: 85vw;
    margin-left: 14vw; /* Same as the width of the sidenav */
    height: 100vh;
    background-position: center;
    background-size: 100vw 130vh;
  }
</style>
