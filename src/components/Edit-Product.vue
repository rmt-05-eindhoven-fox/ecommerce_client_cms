<template>
  <div class="edit-product">
    <div class="form">
      <form @submit.prevent="updateProduct">
        <div class="form-group">
          <label for="name">Name:</label>
          <input class="form-control" v-model="name" type="text" name="name" id="name">
        </div>
        <div class="form-group">
          <label for="image_url">Image URL:</label>
          <input class="form-control" v-model="imageUrl" type="text" name="image_url" id="image_url">
        </div>
        <div class="form-row">
        <div class="form-group col-md-6">
          <label for="price">Price:</label>
          <input class="form-control" v-model="price" type="number" name="price" id="price">
        </div>
        <div class="form-group col-md-6">
          <label for="stock">Stock:</label>
          <input class="form-control" v-model="stock" type="number" name="stock" id="stock">
        </div>
        </div>
        <button class="btn btn-primary">Edit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditProduct',
  data () {
    return {
      name: '',
      imageUrl: '',
      price: 0,
      stock: 0
    }
  },
  methods: {
    editProduct () {
      this.name = this.product[0].name
      this.imageUrl = this.product[0].image_url
      this.price = this.product[0].price
      this.stock = this.product[0].stock
    },
    updateProduct () {
      const payload = {
        id: +this.$route.params.id,
        name: this.name,
        imageUrl: this.imageUrl,
        price: this.price,
        stock: this.stock
      }
      console.log(payload)
      this.$store.dispatch('updateProduct', payload)
    }
  },
  computed: {
    product () {
      return this.$store.state.products.filter(el => +el.id === +this.$route.params.id)
    }
  },
  created () {
    this.$store.dispatch('fetchProduct')
    this.editProduct()
  }
}
</script>

<style>
</style>
