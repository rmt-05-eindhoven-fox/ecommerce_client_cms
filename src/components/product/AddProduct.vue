<template>
  <div id="add-product">
    <Loading :loading="loading" />

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

              <div v-if="showError" class="alert alert-danger alert-dismissible fade show m-3 p-1">
                <ul class="m-b-0">
                  <li v-for="(msg, i) in messageInfo" :key="i" class="p-l-1 m-b-0">{{ msg.error }}</li>
                </ul>
              </div>

              <form @submit.prevent="submitProduct" id="add-product">
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
                    <div class="col-12">
                      <div class="form-group">
                        <select v-model="productCategory" class="form-control">
                          <option value="">--- Select Category ---</option>
                          <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                        </select>
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
      prodName: '',
      prodImgURL: '',
      prodPrice: '',
      prodStock: '',
      productCategory: '',
      messageInfo: [],
      showError: false
    }
  },

  computed: {
    categories () {
      return this.$store.state.categories
    }
  },

  methods: {
    async submitProduct () {
      const payload = {
        name: this.prodName,
        image_url: this.prodImgURL,
        price: this.prodPrice,
        stock: this.prodStock,
        CategoryId: this.productCategory
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
        let msg = [{ error: 'Connection Failed' }]
        if (error.response) {
          msg = error.response.data.message
        }
        this.showError = true
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
      this.showError = false
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
