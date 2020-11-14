<template>
  <div class="bg-dark d-flex justify-content-center align-items-center" style="height: 100vh; width: 100%;">
    <div class="bg-light px-5 py-3 shadow-lg rounded" style="height: 90%; width: 90%;">
      <div class="h3">Edit Product</div>
      <form class="d-flex flex-column h-100 justify-content-center" @submit.prevent="editProduct">
        <div class="form-group row py-3">
          <div class="h5 text-dark col-3">Name</div>
          <input type="text" v-model="product.name" class="form-control col-9 shadow" required>
        </div>
        <div class="form-group row py-3">
          <div class="h5 text-dark col-3">Category</div>
          <input type="text" v-model="product.category" class="form-control col-9 shadow" required>
        </div>
        <div class="form-group row py-3">
          <div class="h5 text-dark col-3">Price</div>
          <input type="number" v-model="product.price" class="form-control col-9 shadow" required>
        </div>
        <div class="form-group row py-3">
          <div class="h5 text-dark col-3">Stock</div>
          <input type="number" v-model="product.stock" class="form-control col-9 shadow" required>
        </div>
        <div class="form-group row py-3">
          <div class="h5 text-dark col-3">Image Url</div>
          <input type="url" v-model="product.image_url" class="form-control col-9 shadow" required>
        </div>
        <div class="form-group row py-3 justify-content-center">
          <input type="submit" value="Confirm" class="form-control col-5 shadow btn-success">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    product (state) {
      return state.products.find(el => el.id === +this.$route.params.id)
    }
  }),
  methods: {
    editProduct () {
      this.$store.dispatch('editProduct', this.product)
    }
  },
  mounted () {
    this.$store.dispatch('products')
  }
}
</script>

<style>

</style>
