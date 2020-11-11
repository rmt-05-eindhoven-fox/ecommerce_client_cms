<template>
  <div id="add-form">
    <form @submit.prevent="addProduct" class="add-form">
      <div class="form-group">
        <label for="product-name">Name of Product</label>
        <input
          v-model="product.name"
          type="text"
          class="form-control"
          id="product-name"
          placeholder="Enter name of product"
        />
      </div>
      <div class="form-group">
        <label for="product-image-url">Image URL</label>
        <input
          v-model="product.image_url"
          type="url"
          class="form-control"
          placeholder="Enter image url"
        />
      </div>
      <div class="form-group">
        <label for="product-price">Price of Product</label>
        <input
          v-model="product.price"
          type="number"
          class="form-control"
          id="product-price"
          placeholder="Enter price of product"
        />
      </div>
      <div class="form-group">
        <label for="product-price">Stock of Product</label>
        <input
          v-model="product.stock"
          type="number"
          class="form-control"
          id="product-stock"
          placeholder="Enter stock of product"
        />
      </div>
      <button type="submit" class="add-btn btn btn-light">Add Product</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddForm',
  data () {
    return {
      product: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    addProduct () {
      const payload = {
        name: this.product.name,
        image_url: this.product.image_url,
        price: this.product.price,
        stock: this.product.stock
      }

      this.$store
        .dispatch('addProduct', payload)
        .then(({ data }) => {
          console.log('Add new product succeed')
          this.fetchProducts()
          this.$router.push({ name: 'Dashboard' })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
