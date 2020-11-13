<template>
  <div class="sidebar-sticky pt-3 sb">
    <div class="user-login">
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
        <router-link to="/dashboard" class="nav-link"> Dashboard </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/add-product" class="nav-link">
          Add Products
        </router-link>
      </li>
      <li class="nav-item mt-5">
        <a class="nav-link" href="" @click.prevent="logOut"> Logout </a>
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
  }
}
</script>

<style>
</style>
