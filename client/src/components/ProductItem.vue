<template>
  <div class="product-item shadow">
    <div class="image">
      <img
        :src="product.image_url"
        alt="iphone"
        style="height: 160px; width: 170px"
      />
    </div>
    <div class="product-detail row">
      <div class="col-2">
        <h5>{{ product.name }}</h5>
      </div>
      <div class="col-2">
        <p>{{ product.price }}</p>
      </div>
      <div class="col-2">
        <p>{{ product.stock }}</p>
      </div>
      <div class="col-3">
        <p>{{ product.category }}</p>
      </div>
      <div class="buttons">
        <button @click="goToEdit(`/edit-product/${product.id}`)">Edit</button>
        <button @click="deleteProduct(product.id)" class="delete-btn">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['product'],
  methods: {
    goToEdit (path) {
      this.$router.push(path)
    },
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    deleteProduct (id) {
      this.$store
        .dispatch('deleteProduct', id)
        .then(() => {
          console.log('Delete product succeed')
          this.fetchProducts()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
