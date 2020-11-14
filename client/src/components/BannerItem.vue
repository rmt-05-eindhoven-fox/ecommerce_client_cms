<template>
  <div class="banner-item shadow">
    <div class="image">
      <img
        :src="banner.image_url"
        alt="iphone"
        style="height: 250px; width: 400px"
      />
    </div>
    <div class="banner-detail row">
      <div class="col-2">
        <h5>{{ banner.title }}</h5>
      </div>
      <div class="col-2">
        <p>{{ banner.status }}</p>
      </div>
      <div class="buttons">
        <button @click="goToEdit(`/edit-banner/${banner.id}`)">Edit</button>
        <button @click="deleteBanner(banner.id)" class="delete-btn">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerItem',
  props: ['banner'],
  methods: {
    goToEdit (path) {
      this.$router.push(path)
    },
    fetchBanners () {
      this.$store.dispatch('fetchBanners')
    },
    deleteBanner (id) {
      this.$store
        .dispatch('deleteBanner', id)
        .then(() => {
          console.log('Delete banner succeed')
          this.fetchBanners()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
