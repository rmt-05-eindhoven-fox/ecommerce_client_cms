<template>
  <div id="add-form">
    <form @submit.prevent="editProduct" class="add-form">
      <div class="form-group">
        <label for="product-name">Product Name</label>
        <input
          v-model="product.name"
          type="text"
          class="form-control"
          id="product-name"
        />
      </div>
      <div class="form-group">
        <label for="product-images-url">Image URL</label>
        <input
          v-model="product.images_url"
          type="url"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="product-price">Price</label>
        <input
          v-model="product.price"
          type="number"
          class="form-control"
          id="product-price"
        />
      </div>
      <div class="form-group">
        <label for="product-price">Stock</label>
        <input
          v-model="product.stock"
          type="number"
          class="form-control"
          id="product-stock"
        />
      </div>
      <button type="submit" class="add-btn btn btn-light">Edit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormEditProduct',
  props: ['product'],
  data() {
    return {
      product: {},
    };
  },
  methods: {
    fetchProductById() {
      const id = this.$route.params.id
      this.$store.dispatch('fetchProductById', id)
    }
    ,
    editProduct() {
      const payload = {
        name: this.product.name,
        images_url: this.product.images_url,
        price: this.product.price,
        stock: this.product.stock,
      }
      
    },
  },
};
</script>

<style>
</style>