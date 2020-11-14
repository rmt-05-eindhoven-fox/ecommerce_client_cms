<template>
  <div class="banner">
    <div class="md-layout md-gutter md-alignment-top-center">
      <div class="md-layout-item md-size-10 md-medium-size-10 md-small-hide md-xsmall-hide"></div>
      <div class="md-layout-item">
        <h1>Banners</h1>
        <md-card class="card-content">
          <div class="card-content">
            <div class="text-left content-menu">
              <div class="d-flex justify-content-between">
                <md-switch v-model="isAll" value="true" class="switch-active">Show All</md-switch>
                <md-button @click="goToAdd" class="md-raised md-accent add-banner">Add</md-button>
              </div>
            </div>
            <div class="banner-content">
              <div class="d-flex flex-wrap">
                <div v-if="!banners.length" class="empty-state">
                  <img class="empty-illustration" src="../assets/NoBanner-Illustration.svg" alt="empty-state">
                  <h4 class="text-muted empty-state-info">Banner not found</h4>
                </div>
                <BannerCard
                v-for="banner in banners"
                :key="banner.id"
                :banner="banner"
                :isAll="isAll"
                ></BannerCard>
              </div>
            </div>
          </div>
        </md-card>
      </div>
      <div class="md-layout-item md-size-10 md-medium-size-10 md-small-hide md-xsmall-hide"></div>
    </div>
  </div>
</template>

<script>
import BannerCard from '../components/BannerCard'

export default {
  name: 'Banner',
  components: {
    BannerCard
  },
  data () {
    return {
      isAll: false
    }
  },
  computed: {
    banners () {
      return this.$store.state.banners
    }
  },
  methods: {
    fetchBanners () {
      this.$store.dispatch('fetchBanners')
    },
    goToAdd () {
      this.$router.push('/banners/add')
    }
  },
  created () {
    this.fetchBanners()
  }
}
</script>

<style>
.card-content {
  border-radius: 15px;
  max-width: 80vw;
  height: 80vh;
}

.content-menu {
  margin-left: 32px;
}

.add-banner {
  margin-right: 32px;
}

.banner-content {
  height: 70vh;
  max-height: 70vh;
  overflow: auto;
}

.banner-card {
  margin-top: 16px;
  width: 16vw;
}

.empty-state {
  margin-top: 24px;
}
</style>
