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
              <label for="exampleFormControlSelect1">Category</label>
              <select class="form-control" id="exampleFormControlSelect1" v-model="inputCategoryId">
                <option default selected>---Select Category---</option>
                <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
              </select>
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
              <button @click="changeModal" type="submit" class="btn btn-light" id="buttonModal" :data-dismiss="modal">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import swal from 'sweetalert'
export default {
  name: 'AddProduct',
  data () {
    return {
      inputProductname: '',
      inputCategoryId: '',
      inputImgUrl: '',
      inputPrice: '',
      inputStock: '',
      modal: ''
    }
  },
  methods: {
    AddProduct () {
      // this.changeModal()
      const objParams = {
        name: this.inputProductname,
        CategoryId: this.inputCategoryId,
        imgUrl: this.inputImgUrl,
        price: this.inputPrice,
        stock: this.inputStock
      }
      this.$store.dispatch('addProduct', objParams)
        .then(data => {
          console.log(data)
        })
        .catch(err => console.log(err, '<<<<err'))
    },
    changeModal () {
      this.modal = 'modal'
    }
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
