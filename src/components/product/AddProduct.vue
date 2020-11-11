<template>
  <div id="add-product">
    <Loading :loading="loading" />
    <!-- <div data-notify="container"
      class="bootstrap-notify-container alert alert-dismissible bg-black animated fadeInDown"
      role="alert"
      data-notify-position="top-center"
      style="display: inline-block; margin: 0px auto; position: fixed; transition: all 0.5s ease-in-out 0s; z-index: 1031; top: 20px; left: 0px; right: 0px;">

      <button type="button" aria-hidden="true" class="close" data-notify="dismiss" style="position: absolute; right: 10px; top: 5px; z-index: 1033;">×</button><span data-notify="icon"></span> <span data-notify="title"></span>
      <span data-notify="message">Turning standard Bootstrap alerts</span><a href="#" target="_blank" data-notify="url"></a>
    </div> -->

    <div id="form-add-product" style="min-width: 300px">
      <div
        v-bind:class="[modal, fade, margin, isShow]"
        id="modal-add-product"
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
                  <strong class="text-pink"> Add New Product </strong>
                </h6>
              </div>
              <form @submit.prevent="submitProduct" id="add-todo">
                <div class="modal-body">
                  <div class="row clearfix">
                    <div class="col-12">
                      <div class="form-group">
                        <input
                          v-model="prodName"
                          type="text"
                          id="add-prodName"
                          class="form-control"
                          maxlength="100"
                          placeholder="Product name.."
                          required
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <input
                          v-model="prodImgURL"
                          type="text"
                          id="add-prodImgURL"
                          class="form-control"
                          maxlength="255"
                          placeholder="Image URL.."
                          required
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <input
                          v-model="prodPrice"
                          type="number"
                          id="add-prodPrice"
                          class="form-control"
                          maxlength="100"
                          placeholder="Price.."
                          required
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <input
                          v-model="prodStock"
                          type="number"
                          id="add-prodStock"
                          class="form-control"
                          maxlength="100"
                          placeholder="Stock.."
                          required
                        />
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
      margin: 'p-t-70',
      isShow: 'show',
      ariaModal: true,
      ariaHidden: false,

      // Model
      prodName: '',
      prodImgURL: '',
      prodPrice: '',
      prodStock: ''
    }
  },
  methods: {
    async submitProduct () {
      const payload = {
        name: this.prodName,
        image_url: this.prodImgURL,
        price: this.prodPrice,
        stock: this.prodStock
      }

      try {
        this.loading = true
        const { data } = await axios({
          url: 'products',
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
        console.log(error.response)
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
      this.prodName = ''
      this.prodImgURL = ''
      this.prodPrice = ''
      this.prodStock = ''
    }
  }
}
</script>

<style>
</style>
