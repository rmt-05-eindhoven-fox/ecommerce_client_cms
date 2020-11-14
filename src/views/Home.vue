<template>
<div>
<div class="sidebar-container">
  <div class="sidebar-logo">
    <img src="../assets/Amaz-ing-logos_white.png" alt="" width="100%">
  </div>
  <ul class="sidebar-navigation">
    <li class="header">Navigation</li>
    <!-- <li>
      <a href="#">
        <i class="fa fa-home" aria-hidden="true"></i> Homepage
      </a>
    </li> -->
    <li>
      <a href="#">
        <i class="fas fa-tachometer-alt" aria-hidden="true"></i> Dashboard
      </a>
    </li>
        <li>
      <a
      @click.prevent="goToProducts"
      href="#">
        <i class="fas fa-dolly-flatbed" aria-hidden="true"></i> Products
      </a>
    </li>
    <!-- <li class="header">Another Menu</li>
    <li>
      <a href="#">
        <i class="fa fa-cog" aria-hidden="true"></i> Settings
      </a>
    </li>
    <li>
      <a href="#">
        <i class="fa fa-info-circle" aria-hidden="true"></i> Information
      </a>
    </li> -->
  </ul>
  <div class="card bg-light w-75 ml-4 mt-4">
    <div class="card-body text-dark d-flex flex-column align-items-center">
      <img class="img-fluid rounded-circle w-100" :src="userDetail.avatar" alt="avatar">
      <h5 class="text-center">
      {{ userDetail.name }}
      </h5>
      <h6 class="text-center text-muted">
      {{ userDetail.email }}
      </h6>
      <h6 class="text-center text-muted">
      {{ userDetail.role }}
      </h6>
    </div>
  </div>
  <button
  @click="logout"
  class="btn btn-danger ml-5 mt-4"><i class="fas fa-sign-out-alt"></i> Logout</button>
</div>
<div class="content-container bg-light" style="min-height: 100vh">
  <div class="container d-flex justify-content-center align-items-center" style="height:100vh"
  v-if="this.$route.path === '/home'">
  <div class="jumbotron h-75 row">
    <div class="col-6">
  <h1 class="display-4">We're sorry</h1>
  <p class="lead">This page is under construction.</p>
  <hr class="my-4">
  <p>Click products on the sidebar to see our available content.</p>
    </div>
    <div class="col-6 d-flex justify-content-center">
  <img class="img-fluid w-50" src="../assets/under-construction.jpg" alt="under-construction">
    </div>
</div>
  </div>
  <router-view
  v-else/>
</div>
</div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goToProducts () {
      this.$router.push('/home/products')
    },
    logout () {
      this.$vToastify.prompt({
        body: 'Are you sure?',
        position: 'center-center',
        answers: { Yes: true, No: false }
      })
        .then(val => {
          if (val) {
            localStorage.clear()
            this.$router.push('/')
          }
        })
    }
  },
  computed: {
    userDetail () {
      return this.$store.state.userDetail
    }
  }
}
</script>

<style>
.sidebar-container {
  position: fixed;
  width: 220px;
  height: 100%;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background: #1a1a1a;
  color: #fff;
}

.content-container {
  padding-top: 20px;
}

.sidebar-logo {
  padding: 10px 15px 10px 30px;
  font-size: 20px;
  background-color: #2574A9;
}

.sidebar-navigation {
  padding: 0;
  margin: 0;
  list-style-type: none;
  position: relative;
}

.sidebar-navigation li {
  background-color: transparent;
  position: relative;
  display: inline-block;
  width: 100%;
  line-height: 20px;
}

.sidebar-navigation li a {
  padding: 10px 15px 10px 30px;
  display: block;
  color: #fff;
}

.sidebar-navigation li .fa .fas{
  margin-right: 10px;
}

.sidebar-navigation li a:active,
.sidebar-navigation li a:hover,
.sidebar-navigation li a:focus {
  text-decoration: none;
  outline: none;
}

.sidebar-navigation li::before {
  background-color: #2574A9;
  position: absolute;
  content: '';
  height: 100%;
  left: 0;
  top: 0;
  -webkit-transition: width 0.2s ease-in;
  transition: width 0.2s ease-in;
  width: 3px;
  z-index: -1;
}

.sidebar-navigation li:hover::before {
  width: 100%;
}

.sidebar-navigation .header {
  font-size: 12px;
  text-transform: uppercase;
  background-color: #151515;
  padding: 10px 15px 10px 30px;
}

.sidebar-navigation .header::before {
  background-color: transparent;
}

.content-container {
  padding-left: 220px;
}
</style>
