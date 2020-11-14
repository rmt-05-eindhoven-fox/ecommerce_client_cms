<template>
  <div class="row justify-content-md-center">
    <div class="col-8">
      <h2>Add Product</h2>
      <form style="text-align: initial;" @submit.prevent="addProduct">
        <div class="form-group">
          <label>Name Product</label>
          <input type="text" class="form-control" v-model="name">
        </div>
        <div class="form-group">
          <label>Image URL</label>
          <input type="text" class="form-control" v-model="image_url">
        </div>
        <div class="form-group">
          <label>Price</label>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">Rp.</div>
            </div>
            <input type="number" class="form-control" id="inlineFormInputGroup" v-model="price">
          </div>
        </div>
        <div class="form-group">
          <label>Stock</label>
          <input type="number" class="form-control" v-model="stock">
        </div>
        <button type="submit" class="btn btn-primary">Add Product</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    addProduct () {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addProduct', payload)
    }
  }
}
</script>

<style>

</style>
