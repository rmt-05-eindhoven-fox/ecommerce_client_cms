<template>
<div class="container justify-content-center d-flex">
  <div class="card shadow bg-white w-75">
    <div class="card-header">
    <h5
    v-if="!this.$route.params.id">Create Banner</h5>
    <h5
    v-else>
    Edit Banner
    </h5>
  </div>
    <div class="card-body">
<form
@submit.prevent="updateBanner">
  <div class="form-row">
    <div class="col-md-12 d-flex justify-content-end">
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="status btn btn-outline-success mx-2" :class="form.status ? `active`:``">
        <input 
        v-model="form.status"
        :value="true"
        type="radio" name="status" id="true" autocomplete="off" > Active
        </label>
        <label class="status btn btn-outline-danger mx-2" :class="!form.status ? `active`:``">
        <input 
        v-model="form.status"
        :value="false"
        type="radio" name="status" id="false" autocomplete="off"> Inactive
        </label>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="name">Title</label>
      <input
      v-model="form.title"
      type="text" class="form-control" id="name" placeholder="Banner Title">
    </div>
    <div class="form-group col-md-6">
      <label for="category">Category</label>
      <input
      v-model="form.category"
      class="form-control" list="categories" name="category" id="category" placeholder="Pick or create a category">
      <datalist id="categories">
        <option
        v-for="category in getCategories"
        :key="category.id"
        :value="category.name"></option>
      </datalist>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-12 text-center">
      <label for="image">Banner URL</label>
      <input
      v-model="form.image_url"
      type="text" class="form-control" id="image" placeholder="Banner URL">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-12 text-center d-flex flex-column justify-content-center align-items-center">
      <label for="preview">Banner Preview</label>
      <img id="preview" class="img-thumbnail img-fluid" @error="setAltImg" style="width: 250px" :src="form.image_url" alt="Banner Preview">
    </div>
  </div>
  <div class="form-row d-flex flex-column">
      <button
      type="submit" class="btn btn-primary my-2">Submit</button>
      <button
      @click="goBack"
      type="button" class="btn btn-danger mt-2">Cancel</button>
  </div>
</form>
    </div>

  </div>

</div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      form: {
        title: '',
        image_url: '',
        status: false,
        category: ''
      }
    }
  },
  methods: {
    setAltImg (e) {
      e.currentTarget.src = 'https://exchange.adobe.com/content/dam/adobeexchange/no_preview.jpg'
    },
    updateBanner () {
      const payload = {
        title: this.form.title,
        image_url: this.form.image_url,
        status: this.form.status,
        category: this.form.category
      }
      if (this.$route.params.id) {
        payload.id = this.$route.params.id
        this.$store.dispatch('editBanner', payload)
          .then(({ data }) => {
            this.$vToastify.success(`${data.title} has been updated`)
            this.$store.commit('spliceEditBanner', data)
            this.$store.dispatch('fetchCategories')
            this.$router.push('/home/banners')
          })
          .catch(err => {
            this.$vToastify.error(err.response.data.error)
          })
      } else {
        this.$store.dispatch('addBanner', payload)
          .then(({ data }) => {
            this.$vToastify.success(`${data.title} has been added as new banner`)
            this.$store.commit('pushBanners', data)
            this.$store.dispatch('fetchCategories')
            this.$router.push('/home/banners')
          })
          .catch(err => {
            this.$vToastify.error(err.response.data.error)
          })
      }
    },
    goBack () {
      this.$router.push('/home/banners')
    }
  },
  computed: {
    getCategories () {
      return this.$store.state.categories
    }
  },
  created () {
    if (this.$route.params.id) {
      this.$store.dispatch('fetchBannerById', this.$route.params.id)
        .then(({ data }) => {
          this.form.title = data.title
          this.form.image_url = data.image_url
          this.form.status = data.status
          this.form.category = this.$store.getters.getCategoryById(data.CategoryId).name
        })
        .catch(err => {
          this.$vToastify.error(err.response.data.error)
        })
    }
  }
}
</script>

<style scoped>
.status {
  border-radius: 1rem !important;
}
</style>
