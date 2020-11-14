<template>
<div class="container justify-content-center d-flex">
  <div class="card shadow bg-white w-75">
    <div class="card-header">
    <h5
    v-if="!this.$route.params.id">Create Product</h5>
    <h5
    v-else>
    Edit Product
    </h5>
  </div>
    <div class="card-body">
<form
@submit.prevent="updateProduct">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="name">Name</label>
      <input 
      v-model="form.name"
      type="text" class="form-control" id="name" placeholder="Product Name">
    </div>
    <div class="form-group col-md-6">
      <label for="category">Category</label>
      <input 
      v-model="form.category"
      class="form-control" list="categories" name="category" id="category" placeholder="Pick or create a category">
      <datalist id="categories">
        <option
        v-for="category in getCategories"
        :key="category.id"
        :value="category.name"></option>
      </datalist>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="price">Price</label>
      <input 
      v-model="form.price"
      type="number" class="form-control" id="price" placeholder="Price">
    </div>
    <div class="form-group col-md-6">
      <label for="stock">Stock</label>
      <input 
      v-model="form.stock"
      type="number" class="form-control" id="stock" placeholder="Stock">
    </div>
  </div>
  <div class="form-row" style="min-height: 300px">
    <div class="form-group col-md-6 d-flex flex-column justify-content-center">
      <label for="image">Image URL</label>
      <input 
      v-model="form.image_url"
      type="text" class="form-control" id="image">
      <button 
      type="submit" class="btn btn-primary my-4">Submit</button>
      <button
      @click="goBack" 
      type="button" class="btn btn-danger">Cancel</button>
    </div>
    <div class="col-md-6 d-flex flex-column justify-content-center align-items-center form-group">
      <label for="preview">Image Preview</label>
      <img id="preview" class="img-thumbnail img-fluid" @error="setAltImg" style="width: 250px" :src="form.image_url" alt="Product Preview">
    </div>
  </div>
</form>
    </div>

  </div>

</div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      form: {
        name: '',
        image_url: '',
        price: '',
        stock: '',
        category: '',
      }
    }
  },
  methods: {
    setAltImg (e) {
      e.currentTarget.src = 'https://exchange.adobe.com/content/dam/adobeexchange/no_preview.jpg'
    },
    updateProduct () {
      const payload = {
        name: this.form.name,
        image_url: this.form.image_url,
        price: this.form.price,
        stock: this.form.stock,
        category: this.form.category,
      }
      if (this.$route.params.id) {
        payload.id = this.$route.params.id
        this.$store.dispatch('editProduct', payload)
          .then(({ data }) => {
            this.$vToastify.success(`${data.name} has been updated`)
            this.$store.commit('spliceEditProduct', data)
            this.$store.dispatch('fetchCategories')
            this.$router.push('/home/products')
          })
          .catch(err => {
            this.$vToastify.error(err.response.data.error)
          })
      } else {
        this.$store.dispatch('addProduct', payload)
          .then(({ data }) => {
            this.$vToastify.success(`${data.name} has been added as new product`)
            this.$store.commit('pushProducts', data)
            this.$store.dispatch('fetchCategories')
            this.$router.push('/home/products')
          })
          .catch(err => {
            this.$vToastify.error(err.response.data.error)
          })
      }
    },
    goBack () {
      this.$router.push('/home/products')
    }
  },
  computed: {
    getCategories () {
      return this.$store.state.categories
    },
  },
  created () {
    if (this.$route.params.id) {
      this.$store.dispatch('fetchProductById', this.$route.params.id)
        .then(({ data }) => {
          this.form.name = data.name
          this.form.image_url = data.image_url
          this.form.price = data.price
          this.form.stock = data.stock
          this.form.category = this.$store.getters.getCategoryById(data.CategoryId).name
        })
        .catch(err => {
          this.$vToastify.error(err.response.data.error)
        })
    }
  }
}
</script>

<style>

</style>