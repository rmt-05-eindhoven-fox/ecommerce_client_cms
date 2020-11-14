<template>
  <div id="add-banner">
    <Loading :loading="loading" />
    <div id="form-add-banner" style="min-width: 300px">
      <div
        v-bind:class="[modal, fade, margin, isShow]"
        id="modal-add-banner"
        tabindex="-1"
        role="dialog"
        style="display: block"
        :aria-modal="ariaModal"
        :aria-hidden="ariaHidden"
      >
        <div class="modal-dialog" role="document">
          <section class="content ml-0" style="min-width: 400px">
            <div class="modal-content card card-inside-title body">
              <div class="modal-header">
                <h6 class="title" id="defaultModalLabel">
                  <strong class="text-pink"> Add New Banner </strong>
                </h6>
              </div>

              <div v-if="messageInfo.length > 0" class="alert alert-danger alert-dismissible fade show m-3 p-1">
                <ul class="m-b-0">
                  <li v-for="(msg, i) in messageInfo" :key="i" class="p-l-1 m-b-0">{{ msg.error }}</li>
                </ul>
              </div>

              <form @submit.prevent="submitBanner" id="add-banner">
                <div class="modal-body">
                  <div class="row clearfix">
                    <div class="col-12">
                      <div class="form-group">
                        <input
                          v-model="bannerName"
                          type="text"
                          class="form-control"
                          maxlength="100"
                          placeholder="Banner name.."
                          required
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <input
                          v-model="bannerUrl"
                          type="text"
                          id="add-bannerUrl"
                          class="form-control"
                          maxlength="255"
                          placeholder="Baner Image URL.."
                          required
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <select v-model="bannerCategory" class="form-control">
                          <option value=""> --- Select Category --- </option>
                          <option value="">Pakaian Pria</option>
                          <option value="">Pakaian Wanita</option>
                        </select>
                      </div>
                    </div>
                    <div class="row m-l-5 m-r-5">
                      <div class="form-group col-6">
                        <label>Star Date</label>
                        <input type="date" v-model="starDate" min="2020-11-14" class="form-control" placeholder="Star date">
                      </div>
                      <div class="form-group col-6">
                        <label>End Date</label>
                        <input type="date" v-model="endDate" min="2020-11-14" class="form-control" placeholder="Star date">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="submit"
                    class="btn btn-raised btn-primary btn-round waves-effect"
                  >
                    Save
                  </button>
                  <button
                    @click.prevent="cancelTask"
                    class="btn btn-raised btn-secondary btn-round waves-effect"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/config/axios'
import Loading from '@/components/loading/Loading.vue'

export default {
  name: 'AddProduct',
  components: {
    Loading
  },
  data () {
    return {
      loading: false,
      // Modal add product
      modal: 'modal',
      fade: 'fade',
      margin: 'p-t-30',
      isShow: 'show',
      ariaModal: true,
      ariaHidden: false,

      // Model
      bannerName: '',
      bannerUrl: '',
      bannerCategory: '',
      starDate: '',
      endDate: '',
      messageInfo: []
    }
  },
  methods: {
    async submitBanner () {
      const payload = {
        name: this.bannerName,
        image_url: this.bannerUrl,
        CategoryId: this.bannerCategory,
        start_date: this.starDate,
        end_date: this.endDate
      }
      console.log(payload)
      try {
        this.loading = true
        const { data } = await axios({
          url: 'banners',
          method: 'post',
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: payload
        })
        console.log(data)
        await this.$store.dispatch('getProducts')
        this.clearForm()
      } catch (error) {
        let msg = [{ error: 'Connection Failed' }]
        if (error.response) {
          msg = error.response.data.message
        }
        this.messageInfo = msg
      } finally {
        this.loading = false
      }
    },

    cancelTask () {
      this.isShow = ''
      this.ariaModal = false
      this.ariaHidden = !this.ariaModal
      // this.clearForm()
      this.$emit('isDisplayModal', false)
    },

    clearForm () {
      this.bannerName = ''
      this.bannerUrl = ''
      this.bannerCategory = ''
      this.starDate = ''
      this.endDate = ''
    }
  }
}
</script>

<style>
</style>
