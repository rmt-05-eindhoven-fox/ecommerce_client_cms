<template>
<div class="form-add">
  <h2>Edit Product!</h2>
<form class="mt-5">
  <div class="row">
    <div class="col">
      <label for="name">Name</label>
      <br>
      <input type="text" class="form-control" placeholder="name">
    </div>
    <br>
    <div class="col">
      <label for="image_url">Image URL</label>
      <input type="text" class="form-control" placeholder="www.google.com">
    </div>
  </div>
  <br>
  <div class="row">
    <div class="col">
      <label for="price">Price</label>
      <input type="number" class="form-control" placeholder="8000">
    </div>
    <div class="col">
      <label for="stock">Stock</label>
      <input type="number" class="form-control" placeholder="1">
    </div>
  </div>
  <br>
    <button type="submit" class="btn btn-warning">Edit Product</button>
</form>
</div>
</template>

<script>
export default {
  name: 'EditProduct'
}
</script>
