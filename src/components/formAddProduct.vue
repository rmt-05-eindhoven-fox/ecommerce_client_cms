<template>
  <div
    class="modal fade"
    id="formAddProduct"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add New Product</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="addProduct">
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Name</label>
              <input
                v-model="newProduct.name"
                type="text"
                class="form-control"
                id="name"
                name="name"
              />
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label"
                >Image_Url</label
              >
              <input
                v-model="newProduct.image_url"
                type="text"
                class="form-control"
                id="image_url"
                name="image_url"
              />
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Price</label>
              <input
                v-model="newProduct.price"
                type="number"
                class="form-control"
                id="price"
                name="price"
                min="1000"
              />
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Stock</label>
              <input
                v-model="newProduct.stock"
                type="number"
                class="form-control"
                id="stock"
                name="stock"
                min="0"
              />
            </div>
            <button type="submit" class="btn btn-primary">Add Product</button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../axios/axiosinstance'
export default {
  name: 'FormAddProduct',
  data () {
    return {
      newProduct: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    addProduct () {
      const token = localStorage.token
      axios({
        url: '/product',
        method: 'post',
        data: {
          name: this.newProduct.name,
          image_url: this.newProduct.image_url,
          price: this.newProduct.price,
          stock: this.newProduct.stock
        },
        headers: {
          token: token
        }
      })
        .then(({ data }) => {
          this.$emit('fetchProductLists')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style>
</style>
