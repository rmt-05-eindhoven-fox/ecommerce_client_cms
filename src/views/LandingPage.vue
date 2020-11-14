<template>
  <div class="landing-page">
    <!-- NAVBAR LANDING PAGE -->
    <NavbarLandingPage/>
    <!-- NAVBAR LANDING PAGE -->

    <!-- LOGIN PAGE -->
    <LoginPage/>
    <!-- LOGIN PAGE -->
  </div>
</template>

<script>
import NavbarLandingPage from '../components/NavbarLandingPage'
import LoginPage from '../components/LoginPage'

export default {
  name: 'LandingPage',
  components: {
    NavbarLandingPage,
    LoginPage
  }
}
</script>
