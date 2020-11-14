<template>
  <div class="modal fade" :id="'modalEditBanner' + banner.id" tabindex="-1" aria-labelledby="modalEditProduct" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content bg-dark text-white">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit Banner</h5>
          <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body text-left">
          <form @submit.prevent="EditBanner">
            <div class="form-group">
              <label for="exampleInputEmail1">Banner Title</label>
              <input type="text" v-model="editBannerTitle" class="form-control" id="editBannerTitle" aria-describedby="emailHelp">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Img Url</label>
              <input type="text" v-model="editBannerImgurl" class="form-control" id="editBannerImgurl" aria-describedby="emailHelp">
            </div>
            <div class="form-group">
              <label for="BannerStatus">Status</label>
              <select class="form-control" id="BannerStatus" v-model="editBannerStatus">
                <option default selected>---Select Status---</option>
                <option>Active</option>
                <option>Not Active</option>
              </select>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-light" id="buttonModal">Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditBanner',
  data () {
    return {
      editBannerTitle: '',
      editBannerImgurl: '',
      editBannerStatus: ''
    }
  },
  props: ['banner'],
  methods: {
    EditBanner () {
      const payload = {
        title: this.editBannerTitle,
        img_Url: this.editBannerImgurl,
        status: this.editBannerStatus,
        id: this.banner.id
      }
      this.$store.dispatch('EditBanner', payload)
    }
  },
  created () {
    this.editBannerTitle = this.banner.title
    this.editBannerImgurl = this.banner.img_Url
    this.editBannerStatus = this.banner.status
  }
}
</script>

<style>

</style>
