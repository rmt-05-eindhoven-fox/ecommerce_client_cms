<template>
    <div class="d-flex flex-column bg-secondary shadow-lg" v-b-hover="sidebarRoute" style="justify-content: space-evenly; height: 100vh;">
      <div style="position: absolute; top: 0vh; width: 11%;" class="">
        <p class="mt-0 mb-0 text-light" v-if="sidebarLink" style="font-size: 12px;">E-commerce Content Management System</p>
      </div>

      <b-button href="#" size="sm" class="d-flex text-decoration-none bg-dark w-100 rounded shadow-lg p-1" @click="dashboard">
        <b-icon class="" variant="light" icon="shop" style="height: 2em; width: 2em;">
        </b-icon>
        <p class="ml-2 mt-2 text-light mb-0" style="font-size: 17px" v-if="sidebarLink">Home</p>
      </b-button>

      <div v-b-hover="productRoute" class="bg-dark p-1 shadow-lg rounded">
        <div class="d-flex pb-0 w-100 ">
          <b-icon class="" variant="light" icon="archive-fill" style="height: 2em; width: 2em;">
          </b-icon>
          <p class="ml-2 mt-1 mb-0 text-light " v-if="sidebarLink">Products</p>
        </div>
        <b-collapse id="collapse-1" v-model="productLink" class="mt-1" style="width: 100%;">
          <b-list-group>
            <b-list-group-item to="/products" variant="dark">Products List</b-list-group-item>
            <b-list-group-item to="/add/product" variant="dark">Add Product</b-list-group-item>
          </b-list-group>
        </b-collapse>
      </div>

      <div v-b-hover="bannerRoute" class="bg-dark p-1 shadow-lg rounded">
        <div class="d-flex w-100">
          <b-icon variant="light" icon="card-heading" style="height: 2em; width: 2em;" class=""></b-icon>
          <p class="ml-2 mt-1 mb-0 text-light" v-if="sidebarLink">Banners</p>
        </div>
        <b-collapse id="collapse-1" v-model="bannerLink" class="mt-1" style="width: 100%;">
          <b-list-group>
            <b-list-group-item to="#" variant="dark">Banner List</b-list-group-item>
            <b-list-group-item to="#" variant="dark">Add Banner</b-list-group-item>
          </b-list-group>
        </b-collapse>
      </div>

      <b-button href="#" size="sm" class="d-flex text-decoration-none bg-dark w-100 rounded shadow-lg p-1" @click="logout">
        <b-icon variant="light" icon="box-arrow-left" class="" style="height: 2em; width: 2em;"></b-icon>
        <p class="ml-2 mt-1 mb-0 text-light" style="font-size: 17px" v-if="sidebarLink">Logout</p>
      </b-button>

      <p class="mt-0 mb-0 text-monospace text-light" v-if="sidebarLink" style="position: absolute; top: 92vh; width: 11%;"><small>Agung Setya Pratama</small></p>

    </div>
</template>

<script>
// @ is an alias to /src

export default {
  data () {
    return {
      productLink: false,
      sidebarLink: false,
      logoutLink: false,
      bannerLink: false,
      homeLink: false
    }
  },
  methods: {
    homeRoute (hovered) {
      if (hovered) this.homeLink = true
      else this.homeLink = false
    },
    bannerRoute (hovered) {
      if (hovered) this.bannerLink = true
      else this.bannerLink = false
    },
    productRoute (hovered) {
      if (hovered) this.productLink = true
      else this.productLink = false
    },
    sidebarRoute (hovered) {
      if (hovered) this.sidebarLink = true
      else this.sidebarLink = false
    },
    logout () {
      localStorage.removeItem('access_token')
      this.$router.push({ name: 'Login' })
    },
    dashboard () {
      this.$router.push({ name: 'Dashboard' })
    }
  }
}
</script>
