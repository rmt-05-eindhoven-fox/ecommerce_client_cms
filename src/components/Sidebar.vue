<template>
  <div class="sidebar-sticky pt-3 sb">
    <div class="user-login">
      <h1 class="mb-5"><i class="fa fa-laptop"></i> {{ appName }}</h1>
      <p>
        Welcome,<br /><strong>{{ loggedInUser }}</strong>
      </p>
    </div>
    <ul class="nav flex-column">
      <p
        class="font-weight-bold pl-2"
        style="color: #333399; background-color: #ffffff"
      >
        Navigation
      </p>
      <li class="nav-item">
        <router-link to="/dashboard" class="nav-link"
          ><i class="fa fa-columns"></i> Dashboard
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/add-product" class="nav-link">
          <i class="fa fa-plus"></i> Add Products
        </router-link>
      </li>
      <li class="nav-item">
        <a to="/add-banner" class="nav-link text-muted" aria-disabled="true">
          <i class="fa fa-plus"></i> Add Banner
        </a>
      </li>
      <li class="nav-item mt-5">
        <a class="nav-link logout" href="" @click.prevent="logOut"
          ><i class="fa fa-power-off"></i> Logout
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      loggedInUser: localStorage.getItem('full_name')
    }
  },
  methods: {
    logOut () {
      localStorage.clear()
      this.$router.push('/')
    }
  },
  computed: {
    appName () {
      return this.$store.state.app
    }
  }
}
</script>

<style>
</style>
