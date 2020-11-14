<template>
  <!-- NAVBAR DASHBOARD -->
  <section id="navbar-dahboard">
    <div class="navbar container-fluid d-flex">
      <div class="logo">
        <nav>
          <h1 class="navbar-brand">
            <i class="fab fa-envira"></i> IKEHA
          </h1>
        </nav>
      </div>
      <div class="d-flex align-items-center logout">
        <div id="user-login" class="mr-4">
          <span>Hello! {{login_user}}</span>
        </div>
        <button @click.prevent="logout()" type="button" class="btn btn-danger text-light">Logout</button>
      </div>
    </div>
  </section>
  <!-- NAVBAR DASHBOARD -->
</template>

<script>
export default {
  name: 'NavbarDashboard',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push({ name: 'LandingPage' })
    }
  },
  computed: {
    login_user () {
      return localStorage.getItem('login_user')
    }
  }
}
</script>

<style>

</style>
