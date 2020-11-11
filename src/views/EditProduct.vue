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
                  <input v-model="product.name" type="text" id="name" class="form-control rounded-pill" placeholder="E.g. Meja Belajar OLYMPIC" autofocus autocomplete="off">
                </div>
                <div class="form-group">
                  <label for="image">Image URL</label>
                  <input v-model="product.image_url" type="text" id="image" class="form-control rounded-pill" placeholder="E.g https://image.jpg" autofocus autocomplete="off">
                </div>
                <div class="form-group">
                  <label for="desc">Description</label>
                  <input v-model="product.description" type="text" id="desc" class="form-control rounded-pill" placeholder="E.g. Meja siku kayu mahoni, kusen bulat" autofocus autocomplete="off">
                </div>
                <div class="form-group">
                  <label for="price">Price</label>
                  <input v-model="product.price" type="number" id="price" class="form-control rounded-pill" placeholder="E.g. 1500000" min="0" autofocus autocomplete="off">
                </div>
                <div class="form-group">
                  <label for="stock">Stock</label>
                  <input v-model="product.stock" type="number" id="stock" class="form-control rounded-pill" placeholder="E.g. 15" min="0" autofocus autocomplete="off">
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

export default {
  name: 'EditProduct',
  components: {
    NavbarDashboard
  },
  data () {
    return {
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
  computed: {
    categories () {
      return this.$store.state.categories
    }
  },
  methods: {
    readCategories () {
      this.$store.dispatch('readCategories')
    },
    editProduct () {
      const id = +this.$route.params.id
      const payload = {
        name: this.product.name,
        image_url: this.product.image_url,
        description: this.product.description,
        price: this.product.price,
        stock: this.product.stock,
        CategoryId: this.product.CategoryId,
        id: id
      }
      this.$store.dispatch('editProduct', payload)
    },
    readProductById () {
      const payload = {
        id: +this.$route.params.id
      }
      this.$store.dispatch('readProductById', payload)
        .then((result) => {
          this.product.name = result.data.name
          this.product.image_url = result.data.image_url
          this.product.description = result.data.description
          this.product.price = result.data.price
          this.product.stock = result.data.stock
          this.product.CategoryId = result.data.CategoryId
        })
        .catch((err) => {
          console.log(err.response.data.msg)
          this.$swal(
            'Error!',
            err.response.data.msg,
            'error'
          )
        })
    },
    cancel () {
      this.$router.push({ name: 'Dashboard' })
    }
  },
  created () {
    this.readCategories()
    this.readProductById()
  }
}
</script>

<style>

</style>
