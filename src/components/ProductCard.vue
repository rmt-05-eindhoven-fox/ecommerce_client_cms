<template>
  <div class="col-lg-4">
    <div class="card">
      <div class="card-body">
        <img class="mb-2" :src="product.image_url" alt="" />
        <h5>{{ product.name }}</h5>
        <p>Stock: {{ product.stock }}</p>
        <p class="font-weight-bold">{{ product.price }}</p>
        <button class="btn btn-success">Update</button>
        <button class="btn btn-danger ml-2">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product']
}
</script>

<style>
</style>
