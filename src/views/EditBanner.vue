<template>
  <div class="editBanner">
    <div class="md-layout md-gutter md-alignment-top-center">
      <div class="md-layout-item md-size-15 md-medium-size-10 md-small-hide md-xsmall-hide"></div>
      <div class="md-layout-item">
        <md-card>
          <md-card-content>
            <div class="md-layout md-gutter md-alignment-top-center">
              <div class="md-layout-item">
                <div class="d-flex justify-content-center">
                  <div v-if="isShow">
                    <md-field>
                      <label>Image URL</label>
                      <md-input v-model="banner.image_url"></md-input>
                    </md-field>
                    <md-button @click="changePicture" class="md-raised md-accent">Add Image</md-button>
                  </div>
                  <div v-else class="image-view">
                    <img :src="banner.image_url" alt="" class="banner-image">
                  </div>
                </div>
                <div class="d-flex justify-content-center">
                  <div class="form-content">
                      <md-button v-if="!isShow" @click="changePicture" class="md-accent md-raised">Change Picture</md-button>
                      <md-field>
                      <label>Title</label>
                      <md-input v-model="banner.title"></md-input>
                    </md-field>
                    <div class="md-layout md-gutter md-alignment-center">
                      <div class="md-layout-item">
                        <md-field>
                          <label>Category</label>
                          <md-select v-model="banner.type">
                            <md-option value="Info">Information</md-option>
                            <md-option value="Sale">Sale</md-option>
                          </md-select>
                        </md-field>
                      </div>
                      <div class="md-layout-item">
                        <md-field>
                          <label>Active?</label>
                          <md-select v-model="banner.status">
                            <md-option value="Active">Yes</md-option>
                            <md-option value="Inactive">No</md-option>
                          </md-select>
                        </md-field>
                      </div>
                    </div>
                    <md-field>
                      <label>Description</label>
                      <md-textarea v-model="banner.description"></md-textarea>
                    </md-field>
                  </div>
                </div>
                <div class="btn-group-bottom">
                  <md-button @click="goToBanners" class="md-raised">Discard</md-button>
                  <md-button @click="editBanner" class="md-raised md-accent">Edit Product</md-button>
                </div>
              </div>
              <div class="md-layout-item md-size-5">
                <md-button @click="deleteBanner" class="md-accent"><md-icon>delete</md-icon></md-button>
              </div>
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
  name: 'EditBanner',
  data () {
    return {
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 200,
        maxFilesize: 0.5,
        dictDefaultMessage: 'Drop image here to upload'
      },
      title: '',
      description: '',
      image_url: '',
      type: '',
      isShow: false
    }
  },
  methods: {
    goToBanners () {
      this.$router.push('/banners')
    },
    editBanner () {
      const payload = {
        id: this.banner.id,
        title: this.banner.title,
        description: this.banner.description,
        image_url: this.banner.image_url,
        type: this.banner.type,
        status: this.banner.status
      }
      this.$store.dispatch('editBanner', payload)
        .then(({ data }) => {
          this.$store.dispatch('fetchBanners')
          this.$router.push('/banners')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchBanner () {
      const payload = {
        id: this.$route.params.id
      }
      this.$store.dispatch('fetchBanner', payload)
    },
    changePicture () {
      this.isShow = !this.isShow
    },
    deleteBanner () {
      const payload = {
        id: this.banner.id
      }
      this.$store.dispatch('deleteBanner', payload)
    }
  },
  computed: {
    banner () {
      return this.$store.state.detailBanner
    }
  },
  created () {
    this.fetchBanner()
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

.banner-image {
  width: 20vw;
}
</style>
