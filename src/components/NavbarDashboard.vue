<template>
  <!-- NAVBAR DASHBOARD -->
  <section id="navbar-dahboard">
    <div class="navbar container-fluid d-flex">
      <div class="logo">
        <nav>
          <a class="navbar-brand" href="#">
            E-Commerce CMS
          </a>
        </nav>
      </div>
      <div class="d-flex align-items-center logout">
        <button @click.prevent="logout()" type="button" class="btn btn-danger">Logout</button>
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
      this.$router.push({ name: 'LandingPage' })
      localStorage.clear()
    }
  }
}
</script>

<style>

</style>
