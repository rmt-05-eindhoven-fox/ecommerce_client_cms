<template>
  <md-card @click.native="editBanner" v-if="isShow" md-with-hover class="banner-card">
    <md-card-media>
      <img :src="banner.image_url" alt="banner-image">
    </md-card-media>

    <md-card-header>
      <div class="md-title">{{ banner.title }}</div>
      <p><span
      class="badge"
      :class="{'badge-active': isActive, 'badge-secondary': !isActive}"
      >{{ banner.status }}</span></p>
    </md-card-header>
  </md-card>
</template>

<script>
export default {
  name: 'BannerCard',
  props: ['banner', 'isAll'],
  computed: {
    isActive () {
      if (this.banner.status === 'Active') {
        return true
      } else {
        return false
      }
    },
    isShow () {
      if (!this.isAll && this.banner.status === 'Inactive') {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    editBanner () {
      const id = this.banner.id
      this.$store.dispatch('fetchBanner', id)
      this.$router.push({ name: 'EditBanner', params: { id: id } })
    }
  }
}
</script>

<style>
.badge-active {
  background-color: #ff5252;
  color: white;
}
</style>
