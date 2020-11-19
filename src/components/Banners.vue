<template>
<div class="banners">
  <div class="d-flex justify-content-between mx-4" :style="{ visibility: bannersHeader }">
      <button
      @click="goToAddForm"
      class="btn btn-primary mx-4"><i class="far fa-plus-square"></i> Add Banner
      </button>
      <button class="btn-primary-outline" data-toggle="tooltip" data-placement="top" title="Click trash to select all category">
        <div>
          <span>Filter by category :  </span>
          <v-selectmenu
          :data="getCategories"
          key-field="id"
          show-field="name"
          v-model="category"
          >
          </v-selectmenu>
        </div>
      </button>
  </div>
  <div class="container-fluid pt-5">
    <table
    v-if="this.$route.path === '/home/banners'"
    class="table table-borderless table-striped table-hover">
    <tbody>
    <Banner
    v-for="banner in getBanners"
    :key="banner.id"
    :banner="banner">
    </Banner>
    </tbody>
    </table>
    <router-view
    v-else>
    </router-view>
  </div>
</div>
</template>

<script>
import Banner from './Banner'

export default {
  name: 'Banners',
  data () {
    return {
      category: ''
    }
  },
  components: {
    Banner
  },
  methods: {
    goToAddForm () {
      this.$router.push('/home/banners/add')
    }
  },
  beforeCreate () {
    this.$store.dispatch('fetchCategories')
    this.$store.dispatch('fetchAllBanners')
  },
  computed: {
    getBanners () {
      return this.$store.getters.getBannersByCategoryId(this.category)
    },
    getCategories () {
      return this.$store.state.categories
    },
    bannersHeader () {
      return this.$store.state.bannersHeader
    }
  }
}
</script>

<style scoped>
.btn-primary-outline {
  background-color: transparent;
  border-color: transparent;
  outline: none;
}
</style>
