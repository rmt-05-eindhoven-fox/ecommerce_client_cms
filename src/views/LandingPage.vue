<template>
  <div class="landingPage">
    <div class="page-top">
      <!-- Masthead-->
      <header class="masthead">
          <div class="container d-flex h-100 align-items-center">
              <div class="mx-auto text-center">
                  <h1 class="mx-auto my-0 text-uppercase text-white-50" >Ecommerce CMS</h1>
                  <router-link to="/login" class="btn btn-primary mt-5">Login</router-link>
              </div>
          </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  created () {
    if (localStorage.getItem('token')) {
      this.$router.push('/dashboard')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.landingPage {
  background-image: url("https://searchengineland.com/figz/wp-content/seloads/2015/02/ecommerce-shopping-cart-keyboard-ss-1920.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.page-top {
  height: 100vh;
}
.text-center {
  margin-top: 20vh;
}
</style>
