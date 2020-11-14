<template>
  <div class="user-profile">
    <md-avatar class="md-avatar-icon md-large">
      <md-icon>account_circle</md-icon>
    </md-avatar>
    <div class="user-menu">
      <md-button @click="logout" md-menu-trigger>Logout</md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  methods: {
    logout () {
      localStorage.removeItem('access_token')
      this.$router.push('login')
    }
  }
}
</script>

<style>
  .user-profile {
    margin-top: 16px;
  }

  .user-menu {
    margin-bottom: 16px;
  }
</style>
