<template>
  <div id="banner">
    <h1 class="page-title" style="font-size: 50px; margin-top: 30px">Banner</h1>
    <div style="margin-top: 70px">
      <div
        style="
          display: flex;
          justify-content: space-between;
          width: 330px;
          margin-left: 970px;
          font-size: 26px;
          font-weight: bold;
          margin-bottom: 50px;
        "
      >
        <p>Title</p>
        <p>Status</p>
      </div>
    </div>
    <BannerItem v-for="banner in banners" :key="banner.id" :banner="banner" />
    <router-view />
  </div>
</template>

<script>
import BannerItem from '@/components/BannerItem.vue'
export default {
  name: 'Banner',
  components: {
    BannerItem
  },
  computed: {
    banners () {
      return this.$store.state.banners
    }
  },
  methods: {
    fetchBanners () {
      this.$store.dispatch('fetchBanners')
    }
  },
  created () {
    this.fetchBanners()
  }
}
</script>
