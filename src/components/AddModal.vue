<template>
  <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
          <h2 class="modal-title">Add Product</h2>
        </div>
        <div class="modal-body">
          <form @submit.prevent="AddProduct">
            <div class="form-group">
              <label for="focusedinput"><h2>Name</h2></label>
              <input v-model="name" type="text" class="form-control1" id="focusedinput" placeholder="Default Input">
            </div>
            <div class="form-group">
              <label for="focusedinput" ><h2>Price</h2></label>
              <input v-model="price" type="text" class="form-control1" id="focusedinput" placeholder="Default Input">
            </div>
            <div class="form-group">
              <label for="focusedinput"><h2>Stock</h2></label>
              <input v-model="stock" type="text" class="form-control1" id="focusedinput" placeholder="Default Input">
            </div>
            <div class="form-group">
              <label for="focusedinput"><h2>Image</h2></label>
              <input v-model="image_url" type="text" class="form-control1" id="focusedinput" placeholder="Default Input">
            </div>
            <!-- <div class="form-group">
              <label for="exampleInputFile"><h2>Image</h2></label>
              <input type="file" id="exampleInputFile">
            </div> -->
             <div class="modal-footer">
              <button type="submit" class="btn btn-primary">Add</button>
            </div>
          </form>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddModal',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    AddProduct () {
      const product = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addProduct', product)
      .then(data => {
        console.log(data, '<<<<data')
        this.$store.dispatch('fetchProducts')
      })
      .catch(err => {
        console.log(err, '<<<<err')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
