<template>
  <div class="shadow rounded container rounded-lg">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between mb-6">
      <div>
        <a class="navbar-brand" href="" @click.prevent="changePage('ListProduct')">Products</a>
        <a class="navbar-brand" href="" @click.prevent="changePage('ListCategory')">Categories</a>
        <a class="navbar-brand" href="" @click.prevent="changePage('ListBanner')">Banners</a>
      </div>
      <div class="dropdown">
        <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-skull"></i>{{ username }}
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="" @click.prevent="Logout"><i class="fa fa-sign-out-alt bg-dark"></i>Logout</a>
        </div>
      </div>
    </nav>
    <div class="container mt-5">
      <ListofProducts v-if="page == 'ListProduct'"/>
      <ListofCategory v-else-if="page == 'ListCategory'"/>
      <ListofBanner v-else-if="page == 'ListBanner'" />
    </div>
  </div>
</template>

<script>
import ListofProducts from '../components/ListofProducts.vue'
import ListofCategory from '../components/ListofCategory.vue'
import ListofBanner from '../components/ListofBanner.vue'
export default {
  name: 'Product',
  data () {
    return {
      username: '',
      page: 'ListProduct'
    }
  },
  methods: {
    Logout () {
      localStorage.clear()
      this.$router.push('Login')
    },
    changePage (payload) {
      this.page = payload
    }
  },
  components: {
    ListofProducts,
    ListofCategory,
    ListofBanner
  },
  created () {
    this.username = localStorage.getItem('username')
  }
}
</script>
