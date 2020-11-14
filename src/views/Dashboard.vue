<template>
  <div class="dashboard">
    <div class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand">Ecommerce</a>
      <p class="my-2 my-lg-0">admin@mail.com</p>
      <button @click.prevent="logout" class="btn btn-primary btn-sm my-2 my-lg-0">Sign Out</button>
    </div>

    <div class="sidebar">
      <a @click="changeChild('product')">Home</a>
    </div>

    <div class="content">
      <div class="head-product" style="display: flex; justify-content: space-between;">
        <h2 style="margin: 10px;">Product</h2>
        <button @click="changeChild('addProduct')" class="btn btn-primary btn-sm" style="height: 80%; margin: 13px">Add</button>
      </div>
      <div class="list">
      <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Dashboard',
  methods: {
    changeChild (path) {
      this.$router.push(`/dashboard/${path}`)
    },
    logout () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
  font-family: "Lato", sans-serif;
}

.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}

.sidebar a.active {
  background-color: #4CAF50;
  color: white;
}

.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}

div.row {
  display: flex;
  justify-content: space-around;
}

div.content {
  margin-top: 50px;
  margin-left: 200px;
  padding: 1px 16px;
}

@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {float: left;}
  div.content {margin-left: 0;}
}

@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}

.navbar {
  display: flex;
  justify-content: space-between;
}
</style>
