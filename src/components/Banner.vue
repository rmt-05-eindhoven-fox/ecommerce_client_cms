<template>
  <div class="banner">
    <div class="d-flex justify-content-around navbar">
      <div></div>
      <p class="navbar-title">
        BANNER
      </p>
      <button @click="logout" class="btn btn-danger">Logout</button>
    </div>
    <div class="container mt-5">
      <div class="mt-4 row row-cols-1">
        <ContentBanner
          v-for="banner in banners"
          :key="banner.id"
          :banner="banner"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ContentBanner from './ContentBanner'

export default {
  name: 'Banner',
  components: {
    ContentBanner
  },
  computed: {
    banners () {
      return this.$store.state.banners
    }
  },
  methods: {
    fetchBanners () {
      this.$loading(true)
      setTimeout(() => {
        this.$store.dispatch('fetchBanners')
        this.$loading(false)
      }, 500)
    },
    logout () {
      localStorage.clear()
      this.$router.push('/')
    }
  },
  created () {
    this.fetchBanners()
  }
}
</script>

<style scoped>
.row {
  max-height: 80vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
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
.container {
  width: 70vw;
}
</style>
