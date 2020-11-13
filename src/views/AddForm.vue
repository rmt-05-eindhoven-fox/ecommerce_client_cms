<template>
  <div>
    <Sidebar />
    <div class="product-form">
      <div class="page-title">
        <h1>Add Product</h1>
        <p>Add new product</p>
      </div>
      <div class="col">
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="prod-name"
              placeholder="Product Name"
            />
          </div>
          <div class="form-group">
            <input
              type="url"
              class="form-control"
              id="image-url"
              placeholder="Image URL"
            />
          </div>
          <div class="form-group">
            <input
              type="number"
              class="form-control"
              id="image-url"
              placeholder="Price"
              min="0"
            />
          </div>
          <div class="form-group">
            <input
              type="number"
              class="form-control"
              id="image-url"
              placeholder="Stock"
              min="0"
            />
          </div>
          <button class="btn">Add Product</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
export default {
  name: 'AddForm',
  components: {
    Sidebar
  }
}
</script>

<style>
</style>
