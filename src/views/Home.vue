<template>
  <div class="home">
    <nav class="navbar navbar-dark justify-content-center bg-dark border-bottom shadow border-info">
      <div>
        <button @click.prevent="addProduct" class="btn btn-outline-info my-2 my-sm-0 mr-0">Add Product</button>
      </div>
      <div class="ml-auto">
        <a class="navbar-brand font-weight-bold">Dashboard</a>
      </div>
      <div class="ml-auto">
        <button @click.prevent="logout" class="btn btn-outline-info my-2 my-sm-0 mr-0">Logout</button>
      </div>
    </nav>
    <table class="table table-striped table-secondary">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, i) in products" :key="product.id">
          <th scope="row">{{i+1}}</th>
          <td><img style="height:100px" :src="product.image_url" :alt="product.name" :title="product.name"></td>
          <td>{{product.name}}</td>
          <td>Rp {{product.price}}</td>
          <td>{{product.stock}}</td>
          <td><button @click.prevent="goToEdit(product.id)" class="btn btn-secondary">Edit</button><button @click.prevent="deleteProduct(product.id)" class="btn btn-danger">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  methods: {
    addProduct () {
      this.$router.push('/products')
    },
    fetchProducts () {
      const token = localStorage.getItem('access_token')
      this.$store.dispatch('fetchProducts', token)
    },
    goToEdit (id) {
      this.$router.push('/products/' + id)
    },
    deleteProduct (id) {
      const payload = {
        id,
        token: localStorage.getItem('access_token')
      }
      this.$store.dispatch('deleteProduct', payload)
        .then(({ data }) => {
          console.log(data)
          this.fetchProducts()
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>
