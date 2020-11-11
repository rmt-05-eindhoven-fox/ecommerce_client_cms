<template>
  <div id="form-add-product">
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
                <strong class="text-pink"> Edit Product </strong>
              </h6>
            </div>
            <form @submit.prevent="updateProduct" id="add-todo">
              <div class="modal-body">
                <div class="row clearfix">
                  <input
                    v-model="prodId"
                    type="hidden"
                    id="add-prodId"
                    class="form-control"
                    required
                  />
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
</template>

<script>
import axios from '@/config/axios'

export default {
  name: 'EditProduct',
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
      prodId: '',
      prodName: '',
      prodImgURL: '',
      prodPrice: '',
      prodStock: ''
    }
  },

  props: ['product'],

  created () {
    this.setForm(this.product)
  },

  methods: {

    cancelTask () {
      this.isShow = ''
      this.ariaModal = false
      this.ariaHidden = !this.ariaModal
      this.$emit('isDisplayModal', false)
    },

    clearForm () {
      this.prodId = ''
      this.prodName = ''
      this.prodImgURL = ''
      this.prodPrice = ''
      this.prodStock = ''
    },

    setForm (product) {
      this.prodId = product.id
      this.prodName = product.name
      this.prodImgURL = product.image_url
      this.prodPrice = product.price
      this.prodStock = product.stock
    },

    async updateProduct () {
      const payload = {
        name: this.prodName,
        image_url: this.prodImgURL,
        price: this.prodPrice,
        stock: this.prodStock
      }
      await axios({
        url: 'products/' + this.prodId,
        method: 'put',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
      this.$store.dispatch('getProducts')
      this.cancelTask()
    }
  }
}
</script>

<style>

</style>
