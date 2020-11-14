<template>
  <div class="container">
    <h1>Product Edit</h1>
    <div class="row mt-5">
      <div class="col-4">
          <img class="thumbnail" :src="product.image_url" alt="Product Image">
      </div>

      <div class="col-8">
        <form>
  <div class="form-group row">
    <label for="input-name" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input
        v-model="product.name"
        type="text" class="form-control" id="input-name" placeholder="Product Name">
    </div>
  </div>
  <div class="form-group row">
    <label for="input-imageUrl" class="col-sm-2 col-form-label">Image Url</label>
    <div class="col-sm-10">
      <input
        v-model="product.image_url"
        type="text" class="form-control" id="input-imageUrl" placeholder="Image Url">
    </div>
  </div>
  <div class="form-group row">
    <label for="input-price" class="col-sm-2 col-form-label">Price</label>
    <div class="col-sm-10">
      <input
        v-model="product.price"
        type="number" min="1" class="form-control" id="input-price" placeholder="Price">
    </div>
  </div>
  <div class="form-group row">
    <label for="input-stock" class="col-sm-2 col-form-label">Stock</label>
    <div class="col-sm-10">
      <input
        v-model="product.stock"
        type="number" min="0" class="form-control" id="input-stock" placeholder="Stock">
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10 button-control">
      <button
        @click.prevent="deleteProduct"
        type="submit"
        class="btn btn-danger">Delete Product</button>
      <button
        @click.prevent="updateProduct"
        type="submit"
        class="btn btn-primary ml-3">Update Product</button>
    </div>
  </div>
</form>

        <!-- <h3>{{ product.name }}</h3>
        <h3>{{ product.price }}</h3>
        <h3>{{ product.stock }}</h3> -->

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  data () {
    return {
      product: {}
    }
  },
  methods: {
    fetchOneProduct () {
      const id = this.$route.params.id
      this.$store.dispatch('fetchOneProduct', id)
        .then(({ data }) => {
          this.product = data
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    updateProduct () {
      const payload = {
        id: this.product.id,
        name: this.product.name,
        image_url: this.product.image_url,
        price: this.product.price,
        stock: this.product.stock
      }
      this.$store.dispatch('updateProduct', payload)
        .then(({ data }) => {
          this.$router.push({ name: 'Home' })
        })
        .catch(({ response }) => {
          console.log(response.message)
        })
    },
    deleteProduct () {
      this.$store.dispatch('deleteProduct', this.product.id)
        .then(({ data }) => {
          this.$router.push({ name: 'Home' })
        })
        .catch(({ response }) => {
          console.log(response.message)
        })
    }
  },
  created () {
    this.fetchOneProduct()
  }
}
</script>

<style>
.button-control{
  display: flex;
}
#form-label{
  text-align:left;
}

</style>
