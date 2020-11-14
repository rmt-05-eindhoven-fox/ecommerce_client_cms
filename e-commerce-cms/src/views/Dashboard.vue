<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">E Commerce CMS</a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <button class="btn btn-outline-danger my-2 my-sm-0" type="submit" @click="logout">Logout</button>
        </form>
      </div>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <div class="col-2">
          <div class="list-group">
            <router-link to="/Dashboard">
              <button type="button" class="list-group-item list-group-item-action">
                List Product
              </button>
            </router-link>
            <router-link to="/Dashboard/Add">
              <button type="button" class="list-group-item list-group-item-action">
                Add Product
              </button>
            </router-link>
          </div>
        </div>
        <div class="col">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style>

</style>
