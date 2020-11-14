<template>
  <div class="edit-form" id="edit-form">
      <form action="">
          <div class="title-add">
              <h4>Form Edit Product</h4><br>
          </div>
          <div class="form-group">
              <label for="product-name">Product Name</label>
              <input
               v-model="product.name"
              type="text" name="product-name" id="product-name" class="form-control" placeholder="Enter product name">
          </div>
          <div class="form-group">
              <label for="product-image_url">Image Product Url</label>
              <input
              v-model="product.image_url"
              type="url" name="product-image_url" id="product-image_url" class="form-control" placeholder="Enter product image url">
          </div>
          <div class="form-group">
              <label for="product-price">Product Price</label>
              <input
              v-model="product.price"
              type="number" name="product-price" id="product-price" class="form-control" placeholder="Enter product price">
          </div>
          <div class="form-group">
              <label for="product-stock">Product Stock</label>
              <input
              v-model="product.stock"
              type="number" name="product-stock" id="product-stock" class="form-control" placeholder="Enter product price">
          </div>
          <button type="submit" class="btn btn-danger">
              Edit product
          </button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'EditProduct',
  data () {
    return {
      product: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  }
}
</script>

<style>

</style>
