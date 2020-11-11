<template>
  <div class="landingPage">
    <div class="page-top">
      <!-- Masthead-->
      <header class="masthead">
          <div class="container d-flex h-100 align-items-center">
              <div class="mx-auto text-center">
                  <h1 class="mx-auto my-0 text-uppercase text-white-50" >Grayscale</h1>
                  <h2 class="text-white-50 mx-auto mt-2 mb-5">A free, responsive, one page Bootstrap theme created by Start Bootstrap.</h2>
                  <router-link to="/login" class="btn btn-primary">Login</router-link>
              </div>
          </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.landingPage {
  background-image: url("https://searchengineland.com/figz/wp-content/seloads/2015/02/ecommerce-shopping-cart-keyboard-ss-1920.jpg");
}
.page-top {
  height: 100vh;
}
.text-center {
  margin-top: 20vh;
}
</style>
