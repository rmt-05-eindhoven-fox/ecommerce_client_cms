<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <router-link class="router-link" to="/">
      <img src="https://deo-ecommerce-bucket.s3-ap-southeast-1.amazonaws.com/favicon.png"/>
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ml-3" id="navbarNav">
      <ul class="navbar-nav">
        <!-- <li class="nav-item">
          <router-link class="router-link" to="/">Home</router-link>
        </li> -->
        <li class="nav-item">
          <router-link class="router-link" to="/product-add">Add Product</router-link>
        </li>
        <li class="nav-item">
          <a class="router-link"
            @click.prevent="userLogout"
            href="">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    userLogout () {
      localStorage.clear()
      this.$store.dispatch('successToast', 'You have been logged out')
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style>
.nav-item{
  margin-right: 10px;
}
ul{
  list-style: none;
}
li{
  list-style: none;
}
a {
  color : white;
  text-emphasis: none;
}
a:hover{
  color : grey;
  text-decoration: none;
  cursor : pointer;
}

.router-link{
  color:black;
}

</style>
