<template>
  <div id="left-sidebar">
    <!-- Left Sidebar -->
    <aside id="leftsidebar" class="sidebar">
      <div class="navbar-brand">
        <button class="btn-menu ls-toggle-btn" type="button">
          <i class="zmdi zmdi-menu"></i>
        </button>
        <a href="#"
          ><img
            src="../assets/images/logo.png"
            width="25"
            alt="Oshop"
          /><span class="m-l-10">VUESHOP</span></a
        >
      </div>
      <div class="menu">
        <ul class="list">
          <li>
            <div class="user-info">
              <a class="image" href="#"
                ><img src="../assets/images/avatar.png" alt="User"
              /></a>
              <div class="detail text-left">
                <h4>Riyan Pratama</h4>
                <small>Super Admin</small>
              </div>
            </div>
          </li>
          <li>
            <router-link :to="{ name: 'Home' }">
              <i class="zmdi zmdi-home"></i><span>Home</span>
            </router-link>
            </li>
          <li>
            <router-link :to="{ name: 'Product' }">
              <i class="zmdi zmdi-shopping-basket"></i><span>Product</span>
            </router-link>
          </li>
          <li>
            <a href="javascript:void(0);" class="menu-toggle"
              ><i class="zmdi zmdi-apps"></i><span>Other</span></a
            >
            <ul class="ml-menu">
              <li><a href="#">Email</a></li>
              <li><a href="#">Chat Apps</a></li>
              <li><a href="#">Calendar</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'LeftSidebar',
  methods: {
    routeProduct () {
      this.$router.push('/products')
    },
    routeHome () {
      this.$router.push('/')
    }
  }
}
</script>
