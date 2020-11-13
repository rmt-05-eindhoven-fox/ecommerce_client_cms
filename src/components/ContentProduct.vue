<template>
  <div class="card mt-2" col>
    <div class="card-body row">
      <div class="col-6">
        <img :src="product.image_url" alt="Product Image">
      </div>
      <div class="col-6">
        <h3 class="card-title">{{ product.name }}</h3>
        <p class="card-text">Price  : {{ product.price }}</p>
        <p class="card-text">Stock  : {{ product.stock }}</p>
        <div class="row justify-content-around">

        <button @click="editProduct" class="btn btn-primary">Edit</button>
        <button @click="deleteProduct" class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'Product',
  props: ['product'],
  methods: {
    editProduct () {
      const id = this.product.id
      this.$router.push(`editProduct/${id}`)
    },
    deleteProduct () {
      const id = this.product.id
      this.$store.dispatch('deleteProduct', id)
        .then(data => {
          this.$store.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
img {
  max-height: 150px;
}
</style>
