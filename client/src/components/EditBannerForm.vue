<template>
  <div id="edit-form">
    <form @submit.prevent="editBanner" class="edit-form">
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
      <button type="submit" class="edit-btn btn btn-light">Edit Banner</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditBannerForm',
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
    fetchBannerById () {
      const id = this.$route.params.id
      this.$store
        .dispatch('fetchBannerById', id)
        .then(({ data }) => {
          this.banner.title = data.title
          this.banner.status = data.status
          this.banner.image_url = data.image_url
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    editBanner () {
      const payload = {
        id: this.$route.params.id,
        title: this.banner.title,
        status: this.banner.status,
        image_url: this.banner.image_url
      }

      this.$store
        .dispatch('editBanner', payload)
        .then(({ data }) => {
          console.log('Edit banner succeed')
          this.$router.push({ name: 'Banner' })
          this.$swal('Success', 'Edit banner succeed', 'success')
          this.$store.dispatch('fetchBanners')
        })
        .catch((err) => {
          console.log(err.response)
          this.$swal('Failed Edit Banner', `${err.response.data.errors}`, 'error')
        })
    }
  },
  created () {
    this.fetchBannerById()
  }
}
</script>

<style>
</style>
