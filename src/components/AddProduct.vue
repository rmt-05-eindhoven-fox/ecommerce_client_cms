<template>
  <div class="bg-dark d-flex justify-content-center align-items-center" style="height: 100vh; width: 100%;">
    <div class="bg-light px-5 py-3 shadow-lg rounded" style="height: 90%; width: 90%;">
      <div class="h3">Add Product</div>
      <form class="d-flex flex-column h-100 justify-content-center " @submit.prevent="addProduct">
        <div class="form-group row py-3">
          <div class="h5 text-dark col-3">Name</div>
          <input type="text" v-model="name" class="form-control col-9 shadow" required>
        </div>
        <div class="form-group row py-3">
          <div class="h5 text-dark col-3">Category</div>
          <input type="text" v-model="category" class="form-control col-9 shadow" required>
        </div>
        <div class="form-group row py-3">
          <div class="h5 text-dark col-3">Price</div>
          <input type="number" v-model="price" class="form-control col-9 shadow" required>
        </div>
        <div class="form-group row py-3">
          <div class="h5 text-dark col-3">Stock</div>
          <input type="number" v-model="stock" class="form-control col-9 shadow" required>
        </div>
        <div class="form-group row py-3">
          <div class="h5 text-dark col-3">Image Url</div>
          <input type="url" v-model="image_url" class="form-control col-9 shadow" required>
        </div>
        <div class="form-group row py-3 justify-content-center">
          <input type="submit" value="Confirm" class="form-control col-5 btn-success shadow">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Add Product',
  data () {
    return {
      name: '',
      category: '',
      image_url: '',
      price: 0,
      stock: 0
    }
  },
  methods: {
    addProduct () {
      this.$store.dispatch('addProduct', {
        name: this.name,
        stock: this.stock,
        image_url: this.image_url,
        price: this.price,
        category: this.category
      })
    }
  }
}
</script>

<style>

</style>
