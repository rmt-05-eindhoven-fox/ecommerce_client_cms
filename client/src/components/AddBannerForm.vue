<template>
  <div id="add-form">
    <form @submit.prevent="addBanner" class="add-form">
      <div class="form-group">
        <label for="banner-name">Title of Banner</label>
        <input
          v-model="banner.title"
          type="text"
          class="form-control"
          id="banner-title"
          placeholder="Enter title of banner"
        />
      </div>
      <div class="form-group">
        <label for="banner-image-url">Image URL</label>
        <input
          v-model="banner.image_url"
          type="url"
          class="form-control"
          placeholder="Enter image url"
        />
      </div>
      <div class="form-group">
        <label for="banner-status">Status of Banner</label>
        <input
          v-model="banner.status"
          type="text"
          class="form-control"
          id="banner-status"
          placeholder="Enter status of banner"
        />
      </div>
      <button type="submit" class="add-btn btn btn-light">Add Banner</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddBannerForm',
  data () {
    return {
      banner: {
        title: '',
        status: '',
        image_url: ''
      }
    }
  },
  methods: {
    fetchBanners () {
      this.$store.dispatch('fetchBanners')
    },
    addBanner () {
      const payload = {
        title: this.banner.title,
        status: this.banner.status,
        image_url: this.banner.image_url
      }

      this.$store
        .dispatch('addBanner', payload)
        .then(({ data }) => {
          console.log('Add new banner succeed')
          this.fetchBanners()
          this.$router.push({ name: 'Banner' })
          this.$swal('Success', 'Add new banner succeed', 'success')
        })
        .catch((err) => {
          this.$swal('Failed Add Banner', `${err.response.data.errors}`, 'error')
        })
    }
  }
}
</script>

<style>
</style>
