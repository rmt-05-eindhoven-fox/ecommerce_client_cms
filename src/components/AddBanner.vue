<template>
  <div class="modal fade" id="modalAddBanner" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content bg-dark text-white">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Banner</h5>
          <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body text-left">
          <form @submit.prevent="AddBanner">
            <div class="form-group">
              <label for="exampleInputEmail1">Banner Title</label>
              <input type="text" v-model="inputBannerTitle" class="form-control" id="inputBannerTitle" aria-describedby="emailHelp">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Img Url</label>
              <input type="text" v-model="inputBannerImgurl" class="form-control" id="inputBannerImgurl" aria-describedby="emailHelp">
            </div>
            <div class="form-group">
              <label for="BannerStatus">Status</label>
              <select class="form-control" id="BannerStatus" v-model="BannerStatus">
                <option default selected>---Select Status---</option>
                <option>Active</option>
                <option>Not Active</option>
              </select>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-light" id="buttonModal">Add Banner</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddBanner',
  data () {
    return {
      inputBannerTitle: '',
      inputBannerImgurl: '',
      BannerStatus: ''
    }
  },
  methods: {
    AddBanner () {
      const payload = {
        title: this.inputBannerTitle,
        img_Url: this.inputBannerImgurl,
        status: this.BannerStatus
      }
      this.$store.dispatch('AddBanner', payload)
    }
  }
}
</script>

<style>

</style>
