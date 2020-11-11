<template>
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
</template>

<script>
export default {
  name: 'UserProfile'
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
