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
          <div class="user-profile">
            <md-avatar class="md-avatar-icon md-large">
              <md-icon>account_circle</md-icon>
            </md-avatar>
            <div class="user-menu">
              <md-menu md-size="medium" md-align-trigger>
                <md-button md-menu-trigger>Admin@mail.com</md-button>
                <md-menu-content>
                  <md-menu-item>
                    <md-button>Logout</md-button>
                  </md-menu-item>
                </md-menu-content>
              </md-menu>
            </div>
          </div>
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
          <div class="speed-add">
            <md-speed-dial class="md-bottom-right">
              <md-speed-dial-target>
                <md-icon class="md-morph-initial">add</md-icon>
                <md-icon class="md-morph-final">edit</md-icon>
              </md-speed-dial-target>

              <md-speed-dial-content>
                <md-button class="md-icon-button">
                  <md-icon>view_carousel</md-icon>
                  <md-tooltip md-direction="left">Banner</md-tooltip>
                </md-button>

                <md-button class="md-icon-button">
                  <md-icon>category</md-icon>
                  <md-tooltip md-direction="left">Category</md-tooltip>
                </md-button>

                <md-button class="md-icon-button">
                  <md-icon>shopping_bag</md-icon>
                  <md-tooltip md-direction="left">Product</md-tooltip>
                </md-button>
              </md-speed-dial-content>
            </md-speed-dial>
          </div>
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

.user-profile {
  margin-top: 16px;
}

.user-menu {
  margin-bottom: 16px;
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
