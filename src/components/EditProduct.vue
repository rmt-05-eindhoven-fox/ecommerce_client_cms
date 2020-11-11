<template>
  <div>
    <!-- NAVBAR DASHBOARD -->
    <NavbarDashboard/>
    <!-- NAVBAR DASHBOARD -->

    <!-- EDIT PRODUCT FORM -->
    <section id="edit-product" class="container mt-5 pt-5">
      <div class="row">
        <div class="col m-auto">
          <div class="card">
            <div class="card-body shadow">
              <h5 class="card-title text-center">EDIT PRODUCT</h5>
              <form @submit.prevent="editProduct()">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input v-model="product.name" type="text" id="name" class="form-control rounded-pill" placeholder="E.g. Meja Belajar OLYMPIC" required autofocus autocomplete="off">
                </div>
                <div class="form-group">
                  <label for="image">Image URL</label>
                  <input v-model="product.image_url" type="text" id="image" class="form-control rounded-pill" placeholder="E.g https://image.jpg" required autofocus autocomplete="off">
                </div>
                <div class="form-group">
                  <label for="desc">Description</label>
                  <input v-model="product.description" type="text" id="desc" class="form-control rounded-pill" placeholder="E.g. Meja siku kayu mahoni, kusen bulat" required autofocus autocomplete="off">
                </div>
                <div class="form-group">
                  <label for="price">Price</label>
                  <input v-model="product.price" type="number" id="price" class="form-control rounded-pill" placeholder="E.g. 1500000" min="0" required autofocus autocomplete="off">
                </div>
                <div class="form-group">
                  <label for="stock">Stock</label>
                  <input v-model="product.stock" type="number" id="stock" class="form-control rounded-pill" placeholder="E.g. 15" min="0" required autofocus autocomplete="off">
                </div>
                <div class="form-group">
                  <label for="category">Category</label>
                  <select v-model="product.CategoryId" id="category" class="form-control rounded-pill">
                    <option value="">-- Select --</option>
                    <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}</option>
                  </select>
                </div>
                <hr class="bg-light">
                <button class="btn btn-lg btn-primary btn-block mt-4 p-2 rounded-pill" type="submit">EDIT</button>
                <a @click.prevent="cancel()" class="btn btn-lg btn-danger btn-block mt-4 p-2 rounded-pill">CANCEL</a>
                <hr class="bg-light">
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- EDIT PRODUCT FORM -->
  </div>
</template>

<script>
import NavbarDashboard from '../components/NavbarDashboard'
import axios from '../config/axios'

export default {
  name: 'EditProduct',
  components: {
    NavbarDashboard
  },
  data () {
    return {
      // Categories
      categories: [],

      // Product
      product: {
        name: '',
        image_url: '',
        description: '',
        price: '',
        stock: '',
        CategoryId: ''
      }
    }
  },
  methods: {
    readCategories () {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: '/categories',
        headers: {
          access_token: accessToken
        }
      }).then((result) => {
        this.categories = []
        this.categories = result.data
      }).catch((err) => {
        console.log(err.response.data.msg)
      })
    },
    editProduct () {
      const id = +this.$route.params.id
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'PUT',
        url: `/products/${id}`,
        headers: {
          access_token: accessToken
        },
        data: {
          name: this.product.name,
          image_url: this.product.image_url,
          description: this.product.description,
          price: +this.product.price,
          stock: +this.product.stock,
          CategoryId: +this.product.CategoryId
        }
      }).then((result) => {
        this.$router.push({ name: 'Dashboard' })
      }).catch((err) => {
        console.log(err.response.data.msg)
      })
    },
    cancel () {
      this.$router.push({ name: 'Dashboard' })
    }
  },
  created () {
    this.readCategories()
  }
}
</script>

<style>

</style>
