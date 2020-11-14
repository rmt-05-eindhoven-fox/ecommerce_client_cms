<template>
  <div id="editProduct">
    <NavbarDashboard/>
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
                  <label for="edit-name">Name</label>
                  <input v-model="name" placeholder="product name" type="text" class="form-control" id="edit-name">
                </div> <hr>
                <div class="form-group" width="auto" height="150">
                  <img :src="image_url" onerror="this.src='https://www.metrorollerdoors.com.au/wp-content/uploads/2018/02/unavailable-image.jpg'" alt="image_not_found" width="auto" height="150">
                </div> <hr>
                <div class="form-group">
                  <label for="edit-image_url">Image URL</label>
                  <input v-model="image_url" placeholder="image url" type="url" class="form-control" id="edit-image_url">
                </div>
                <div class="form-group">
                  <label for="edit-category" class="col-form-label">Category:</label>
                  <select v-model="CategoryId" placeholder="..." class="custom-select" id="edit-category">
                    <option v-for="category in categories"
                      :key="category.id"
                      :value="category.id"
                    >
                      {{ category.name }}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="edit-price">Price</label>
                  <input v-model="price" placeholder="product price" type="number" class="form-control" id="edit-price">
                </div>
                <div class="form-group">
                  <label for="edit-stock">Stock</label>
                  <input  v-model="stock" placeholder="product stock" type="number" class="form-control" id="edit-stock">
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
  name: 'EditProduct',
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
          this.CategoryId = data.CategoryId
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
        CategoryId: this.CategoryId,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('editProduct', payload)
    },
    fetchCategories () {
      this.$store.dispatch('fetchCategories')
    }
  },
  created () {
    const accesToken = localStorage.getItem('access_token')
    if (accesToken) {
      this.getProductById()
      this.fetchCategories()
    } else {
      this.$router.push({ name: 'Login' })
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
