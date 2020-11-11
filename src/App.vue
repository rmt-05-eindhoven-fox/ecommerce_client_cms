<template>
  <div id="app">
    <div class="page-container">
      <md-app>
        <md-app-toolbar class="md-transparent" md-elevation="1">
          <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
          <h3 class="md-title">SKoutwear Admin</h3>
        </md-app-toolbar>
        <md-app-drawer :md-active.sync="menuVisible">
          <UserProfile></UserProfile>
          <md-divider></md-divider>
          <md-list>
            <div id="nav">
              <md-list-item>
                <md-icon>leaderboard</md-icon>
                <span class="md-list-item-text">
                  <router-link to="/">Dashboard</router-link>
                </span>
              </md-list-item>

              <md-list-item>
                <md-icon>shopping_bag</md-icon>
                <span class="md-list-item-text">
                  <router-link to="/products">Products</router-link>
                </span>
              </md-list-item>

              <md-list-item>
                <md-icon>category</md-icon>
                <span class="md-list-item-text">
                  <router-link to="/categories">Categories</router-link>
                </span>
              </md-list-item>

              <md-list-item>
                <md-icon>view_carousel</md-icon>
                <span class="md-list-item-text">
                  <router-link to="/about">Banners</router-link>
                </span>
              </md-list-item>
            </div>
          </md-list>
        </md-app-drawer>
        <md-app-content>
          <router-view />
          <SpeedDial></SpeedDial>
        </md-app-content>
      </md-app>
    </div>
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
import SpeedDial from './components/SpeedDial'
import UserProfile from './components/UserProfile'

export default {
  name: 'App',
  data: () => ({
    menuVisible: false
  }),
  components: {
    SpeedDial,
    UserProfile
  }
}
</script>
