<template>
  <div id="addProduct">
    <NavbarDashboard/>
    <div class="container">
      <div class="row d-flex justify-content-center my-5">
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
                </div><hr>
                <div class="form-group" width="auto" height="150">
                  <img :src="image_url" onerror="this.src='https://www.metrorollerdoors.com.au/wp-content/uploads/2018/02/unavailable-image.jpg'" alt="image_not_found" width="auto" height="150">
                </div> <hr>
                <div class="form-group">
                  <label for="add-image_url">Image URL</label>
                  <input v-model="image_url" placeholder="image url" type="url" class="form-control" id="add-image_url">
                </div>
                <div class="form-group">
                  <label for="add-category" class="col-form-label">Category:</label>
                  <select v-model="CategoryId" placeholder="..." class="custom-select" id="add-category">
                    <option v-for="category in categories"
                      :key="category.id"
                      :value="category.id">
                      {{ category.name }}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="add-price">Price</label>
                  <input v-model="price" placeholder="product price" type="number" class="form-control" id="add-price">
                </div>
                <div class="form-group">
                  <label for="add-stock">Stock</label>
                  <input v-model="stock" placeholder="product stock" type="number" class="form-control" id="add-stock">
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
import NavbarDashboard from '../components/NavbarDashboard'

export default {
  name: 'AddProduct',
  components: {
    NavbarDashboard
  },
  data () {
    return {
      name: '',
      image_url: '',
      CategoryId: '',
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
        CategoryId: this.CategoryId,
        price: this.price,
        stock: this.stock,
        access_token: accessToken
      }
      this.$store.dispatch('addProduct', payload)
    },
    fetchCategories () {
      this.$store.dispatch('fetchCategories')
    }
  },
  created () {
    const accesToken = localStorage.getItem('access_token')
    if (!accesToken) {
      this.$router.push({ name: 'Login' })
    } else {
      this.fetchCategories()
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  }
}
</script>

<style>

</style>
