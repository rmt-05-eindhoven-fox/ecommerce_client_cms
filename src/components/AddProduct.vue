<template>
  <div class="container pt-10">
      <form @submit.prevent="addProduct">
        <div class="form-row">
          <div class="form-group col-md-12">
            <label for="name">Name</label>
            <input v-model="name"   type="text" class="form-control" id="name">
          </div>
          <div class="form-group col-md-12">
            <label for="image_url">Image Url</label>
            <input v-model="image_url" type="text" class="form-control" id="image-url">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="price">Price</label>
            <input v-model="price" type="text" class="form-control" id="price">
          </div>
          <div class="form-group col-md-6">
            <label for="stock">Stock</label>
            <input v-model="stock" type="text" class="form-control" id="stock">
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: 0,
      stock: 0
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
      this.$router.push('/dashboard/Product')
    }
  }
}
</script>
