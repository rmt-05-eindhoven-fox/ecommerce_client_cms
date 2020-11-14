<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-transparent" md-elevation="1">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <h3 class="md-title">E-commerce Admin</h3>
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
                <router-link to="/banners">Banners</router-link>
              </span>
            </md-list-item>
          </div>
        </md-list>
      </md-app-drawer>
      <md-app-content>
        <router-view />
        <div v-if="homepage">
          <img class="welcome-illustration" src="../assets/dashboard.svg" alt="empty-state">
          <h4 class="text-muted empty-state-info">Welcome to E-Commerce CMS</h4>
          <md-button @click="goToProduct" class="md-raised md-accent">Show Product</md-button>
        </div>
        <SpeedDial></SpeedDial>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import SpeedDial from '../components/SpeedDial'
import UserProfile from '../components/UserProfile'

export default {
  name: 'Home',
  components: {
    SpeedDial,
    UserProfile
  },
  data: () => ({
    menuVisible: false
  }),
  methods: {
    goToProduct () {
      this.$router.push('/products')
    }
  },
  computed: {
    homepage () {
      if (this.$route.path === '/' || this.$route.path === '/home') {
        return true
      } else {
        return false
      }
    }
  }
}

</script>

<style>
.welcome-illustration {
  width: 40vw;
}
</style>
