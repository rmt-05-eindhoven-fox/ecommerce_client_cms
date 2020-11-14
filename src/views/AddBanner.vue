<template>
  <div class="addBanner">
    <div class="md-layout md-gutter md-alignment-top-center">
      <div class="md-layout-item md-size-15 md-medium-size-10 md-small-hide md-xsmall-hide"></div>
      <div class="md-layout-item">
        <md-card>
          <md-card-content>
            <h1>Add Banner</h1>
            <div class="d-flex justify-content-center">
              <div v-if="!isImageShow">
                <md-field>
                  <label>Image URL</label>
                  <md-input v-model="image_url"></md-input>
                </md-field>
                <md-button @click="addImage" class="md-raised md-accent">Add Image</md-button>
              </div>
              <div v-else>
                <img :src="image_url" alt="product-image" class="product-image">
                <md-button @click="addImage" class="md-raised md-accent">Change image</md-button>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <div class="form-content">
                <md-field>
                  <label>Title</label>
                  <md-input v-model="title"></md-input>
                </md-field>
                <div class="md-layout md-gutter md-alignment-center">
                  <div class="md-layout-item">
                    <md-field>
                      <label for="movie">Category</label>
                      <md-select v-model="type">
                        <md-option value="Info">Information</md-option>
                        <md-option value="Sale">Sale</md-option>
                      </md-select>
                    </md-field>
                  </div>
                  <div class="md-layout-item">
                    <md-switch v-model="isActive" value="true">Active?</md-switch>
                  </div>
                </div>
                <md-field>
                  <label>Description</label>
                  <md-textarea v-model="description"></md-textarea>
                </md-field>
              </div>
            </div>
            <div class="btn-group-bottom">
              <md-button @click="goToBanners" class="md-raised">Discard</md-button>
              <md-button @click="addBanner" class="md-raised md-accent">Add Product</md-button>
            </div>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-size-15 md-medium-size-10 md-small-hide md-xsmall-hide"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddBanner',
  data () {
    return {
      title: '',
      description: '',
      image_url: 'https://image.freepik.com/free-vector/coffee-shop-retro-logo-collection_23-2148385739.jpg',
      type: '',
      selected_categories: [],
      catName: '',
      isImageShow: false
    }
  },
  methods: {
    goToBanners () {
      this.$router.push('/banners')
    },
    addBanner () {
      let status = ''
      if (this.isActive) {
        status = 'Active'
      } else {
        status = 'Inactive'
      }
      const payload = {
        title: this.title,
        description: this.description,
        image_url: this.image_url,
        status,
        type: this.type
      }
      this.$store.dispatch('addBanner', payload)
    },
    addImage () {
      this.isImageShow = !this.isImageShow
    }
  }
}
</script>

<style>
#dropzone2 {
  height: 25vh;
  width: 40vw;
}

.form-content {
  width: 25vw;
}

.btn-group-bottom {
  margin-top: 16px;
}
</style>
