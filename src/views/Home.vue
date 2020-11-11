<template>
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
  })
}
</script>
