<template>
  <div>
    <nav class="navbar navbar-dark justify-content-center bg-dark border-bottom shadow border-info">
      <div>
        <router-link to="/" class="navbar-brand font-weight-bold">Dashboard</router-link>
      </div>
      <div class="ml-auto">
        <a class="navbar-brand font-weight-bold">Edit Product</a>
      </div>
      <div class="ml-auto">
        <button @click="logout" class="btn btn-outline-info my-2 my-sm-0 mr-0">Logout</button>
      </div>
    </nav>
    <div class="row justify-content-center mt-4 mr-0">
      <div class="col-sm-4 p-3 bg-secondary rounded shadow text-white">
        <form @submit.prevent="updateProduct">
          <div class="form-group">
            <label for="name">Name</label>
            <input v-model="name" type="text" class="form-control" id="name">
          </div>
          <div class="form-group">
            <label for="price">Price</label>
            <input v-model="price" type="number" class="form-control" id="price">
          </div>
          <div class="form-group">
            <label for="stock">Stock</label>
            <input v-model="stock" type="number" class="form-control" id="stock">
          </div>
          <div class="form-group">
            <label for="image">Image URL</label>
            <input v-model="image_url" type="text" class="form-control" id="image">
          </div>
          <button type="submit" class="btn btn-block btn-dark">Update Product</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Edit',
  data () {
    return {
      name: '',
      price: '',
      stock: '',
      image_url: ''
    }
  },
  watch: {
    product (val) {
      this.name = val.name
      this.price = val.price
      this.stock = val.stock
      this.image_url = val.image_url
    }
  },
  methods: {
    fetchProductById () {
      const payload = {
        id: this.$route.params.id,
        token: localStorage.getItem('access_token')
      }
      // console.log(payload.id, '<<<<<<< isi route.params.id')
      this.$store.dispatch('fetchProductById', payload)
    },
    updateProduct () {
      const id = this.$route.params.id
      const payload = {
        id,
        name: this.name,
        price: this.price,
        stock: this.stock,
        image_url: this.image_url,
        token: localStorage.getItem('access_token')
      }
      // console.log(payload)
      this.$store.dispatch('updateProduct', payload)
        .then(({ data }) => {
          console.log(data)
          this.$router.push('/')
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
    product () {
      return this.$store.state.product
    }
  },
  created () {
    this.fetchProductById()
  }
}
</script>

<style>

</style>
