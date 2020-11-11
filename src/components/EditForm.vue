<template>
  <div id="edit-form">
    <form class="edit-form">
      <div class="form-group">
        <label for="product-name">Name of Product</label>
        <input
          type="text"
          class="form-control"
          id="product-name"
          placeholder="Enter name of product"
        />
      </div>
      <div class="form-group">
        <label for="product-image-url">Image URL</label>
        <input
          type="url"
          class="form-control"
          placeholder="Enter image url"
        />
      </div>
      <div class="form-group">
        <label for="product-price">Price of Product</label>
        <input
          type="number"
          class="form-control"
          id="product-price"
          placeholder="Enter price of product"
        />
      </div>
      <div class="form-group">
        <label for="product-price">Stock of Product</label>
        <input
          type="number"
          class="form-control"
          id="product-stock"
          placeholder="Enter stock of product"
        />
      </div>
      <button type="submit" class="edit-btn btn btn-light">Edit Product</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditForm'
}
</script>

<style scoped>
  #edit-form {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 20px;
  }

  .edit-form {
    background-color: #e1b12c;
    width: 500px;
    padding: 30px;
    border-radius: 0.3em;
    color: #fff;
  }

  .edit-btn {
    align-items: center;
  }
</style>
