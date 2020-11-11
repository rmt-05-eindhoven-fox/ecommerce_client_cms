<template>
  <div id="addProduct">
    <div class="container">
      <div class="row">
        <div class="col-auto">
          <div class="card">
            <div class="card-header">
              <h3>Edit Product</h3>
            </div>
            <div class="card-body">
              <form @submit.prevent="editProduct">
                <div class="form-group">
                  <label for="add-name">Name</label>
                  <input v-model="name" placeholder="product name" type="text" class="form-control" id="add-name">
                </div> <hr>
                <div class="form-group" width="auto" height="150">
                  <img :src="image_url" alt="image not found" width="auto" height="150">
                </div> <hr>
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
  name: 'EditProduct',
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
    getProductById () {
      const id = this.$route.params.id
      const accesToken = localStorage.getItem('access_token')
      const payload = {
        id,
        access_token: accesToken
      }
      this.$store.dispatch('getProductById', payload)
        .then(({ data }) => {
          this.name = data.name
          this.image_url = data.image_url
          this.category = data.category
          this.price = data.price
          this.stock = data.stock
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    editProduct () {
      const id = this.$route.params.id
      const accesToken = localStorage.getItem('access_token')
      const payload = {
        id,
        access_token: accesToken,
        name: this.name,
        image_url: this.image_url,
        category: this.category,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('editProduct', payload)
        .then(({ data }) => {
          console.log(data)
          this.$router.push({ name: 'Products' })
        })
        .catch(err => {
          console.log(err.response.data.msg)
        })
    }
  },
  created () {
    this.getProductById()
  }
}
</script>

<style>

</style>
