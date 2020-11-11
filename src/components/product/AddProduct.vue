<template>
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
                        maxlength="100"
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
</template>

<script>
import axios from '@/config/axios'

export default {
  name: 'AddProduct',
  data () {
    return {
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
        const { data } = await axios({
          url: 'products',
          method: 'post',
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: payload
        })
        console.log(data)
        this.clearForm()
      } catch (error) {
        console.log(error.response)
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
