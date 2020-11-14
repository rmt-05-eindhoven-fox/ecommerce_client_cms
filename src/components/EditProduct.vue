<template>
  <div class="modal fade" :id="'modalEditProduct' + product.id" tabindex="-1" aria-labelledby="modalEditProduct" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content bg-dark text-white">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit Product</h5>
          <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body text-left">
          <form @submit.prevent="EditProduct">
            <div class="form-group">
              <label for="exampleInputEmail1">Product Name</label>
              <input type="text" v-model="editProductname" class="form-control" id="editProductname" aria-describedby="emailHelp">
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Category</label>
              <select class="form-control" id="exampleFormControlSelect1" v-model="EditCategoryId">
                <option default selected>---Select Category---</option>
                <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Image Url</label>
              <input type="text" v-model="editImgUrl" class="form-control" id="editImgUrl">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Price</label>
              <input type="number" v-model="editPrice" class="form-control" id="editPrice">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Stock</label>
              <input type="number" v-model="editStock" class="form-control" id="editStock">
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
  name: 'EditProduct',
  data () {
    return {
      editProductname: '',
      editImgUrl: '',
      editPrice: '',
      editStock: '',
      EditCategoryId: ''
    }
  },
  props: ['product'],
  methods: {
    EditProduct () {
      const payload = {
        id: this.product.id,
        name: this.editProductname,
        imgUrl: this.editImgUrl,
        price: this.editPrice,
        stock: this.editStock,
        CategoryId: this.EditCategoryId
      }
      this.$store.dispatch('editProduct', payload)
    }
  },
  created () {
    this.editProductname = this.product.name
    this.editImgUrl = this.product.imgUrl
    this.editPrice = this.product.price
    this.editStock = this.product.stock
    this.EditCategoryId = this.product.Category.id
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  }
}
</script>

<style>

</style>
