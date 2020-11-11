<template>
  <div class="modal fade" id="modalAddProduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content bg-dark text-white">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
          <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body text-left">
          <form @submit.prevent="AddProduct">
            <div class="form-group">
              <label for="exampleInputEmail1">Product Name</label>
              <input type="text" v-model="inputProductname" class="form-control" id="inputProductname" aria-describedby="emailHelp">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Image Url</label>
              <input type="text" v-model="inputImgUrl" class="form-control" id="inputImgUrl">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Price</label>
              <input type="number" v-model="inputPrice" class="form-control" id="inputPrice">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Stock</label>
              <input type="number" v-model="inputStock" class="form-control" id="inputStock">
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
  name: 'AddProduct',
  data () {
    return {
      inputProductname: '',
      inputImgUrl: '',
      inputPrice: '',
      inputStock: ''
    }
  },
  methods: {
    AddProduct () {
      const objParams = {
        name: this.inputProductname,
        imgUrl: this.inputImgUrl,
        price: this.inputPrice,
        stock: this.inputStock
      }
      this.$store.dispatch('addProduct', objParams)
        .then(data => {
          console.log(data, '<<<<data')
        })
        .catch(err => console.log(err, '<<<<err'))
    }
  }
}
</script>

<style>

</style>
