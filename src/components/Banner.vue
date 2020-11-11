<template>
  <div class="banner">
    <div class="d-flex justify-content-center navbar">
      <p class="navbar-title">
        BANNER
      </p>
    </div>

    <div class="card mt-2">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style scoped>
.navbar {
  background: #2c393f;
  color: white;
  height: 7vh;
}
.navbar-title {
  font-size: 20px;
  margin: auto;
}
.banner {
  background: #ededed;
  height: 100vh;
}
</style>
