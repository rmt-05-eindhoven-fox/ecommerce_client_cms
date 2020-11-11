<template>
  <div id="addProduct">
    <div class="container">
      <div class="row">
        <div class="col-auto">
          <div class="card">
            <div class="card-header">
              <h3>Add Product</h3>
            </div>
            <div class="card-body">
              <form @submit.prevent="addProduct">
                <div class="form-group">
                  <label for="add-name">Name</label>
                  <input v-model="name" placeholder="product name" type="text" class="form-control" id="add-name">
                </div>
                <div class="form-group">
                  <label for="add-image_url">Image URL</label>
                  <input v-model="image_url" placeholder="image url" type="url" class="form-control" id="add-image_url">
                </div>
                <div class="form-group">
                  <label for="add-category">Category</label>
                  <input v-model="category" placeholder="product category" type="text" class="form-control" id="add-category">
                </div>
                <div class="form-group">
                  <label for="add-price">Price</label>
                  <input v-model="price" placeholder="product price" type="number" class="form-control" id="add-price">
                </div>
                <div class="form-group">
                  <label for="add-stock">Stock</label>
                  <input  v-model="stock" placeholder="product stock" type="number" class="form-control" id="add-stock">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                <button @click="$router.push({ name: 'Products' })" type="button" class="btn btn-danger">Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      image_url: '',
      category: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    addProduct () {
      const accessToken = localStorage.getItem('access_token')
      const payload = {
        name: this.name,
        image_url: this.image_url,
        category: this.category,
        price: this.price,
        stock: this.stock,
        access_token: accessToken
      }
      this.$store.dispatch('addProduct', payload)
        .then(({ data }) => {
          this.$router.push('Products')
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  }
}
</script>

<style>

</style>
