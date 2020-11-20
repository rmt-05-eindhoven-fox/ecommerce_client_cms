<template>
  <div>
    <nav class="navbar navbar-dark justify-content-center bg-dark border-bottom shadow border-info">
      <div>
        <router-link to="/" class="navbar-brand font-weight-bold">Dashboard</router-link>
      </div>
      <div class="ml-auto">
        <a class="navbar-brand font-weight-bold">Add Product</a>
      </div>
      <div class="ml-auto">
        <button @click="logout" class="btn btn-outline-info my-2 my-sm-0 mr-0">Logout</button>
      </div>
    </nav>
    <div class="row justify-content-center mt-4 mr-0">
      <div class="col-sm-4 p-3 bg-secondary rounded shadow text-white">
        <form @submit.prevent="addProduct">
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
          <button type="submit" class="btn btn-block btn-dark">Add Product</button>
        </form>
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
      price: '',
      stock: '',
      image_url: ''
    }
  },
  methods: {
    addProduct () {
      const payload = {
        name: this.name,
        price: this.price,
        stock: this.stock,
        image_url: this.image_url,
        token: localStorage.getItem('access_token')
      }
      this.$store.dispatch('addProduct', payload)
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
  }
}
</script>

<style>

</style>
