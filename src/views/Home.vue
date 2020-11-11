<template>
  <div class="home">
    <div class="container" style="overflow: true">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col" colspan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, id) in products" :key="id">
            <td scope="row">{{ product.id }}</td>
            <td><img :src="product.image_url" alt="" srcset="" height="200px"></td>
            <td>{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.stock }}</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from '@/config/axios.js'

const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJnYWJyaWVsQGFkbWluLmNvbSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTYwNTA1ODc2N30.WTIPuV3xcbJKYXn1HnskjjL6IaSzTP0l14zZk6RhHuY'

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      products: []
    }
  },
  methods: {
    fetchAllProducts () {
      axios
        .get('products', {
          headers: {
            access_token: accessToken
          }
        })
        .then(({ data }) => {
          this.products = data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.fetchAllProducts()
  }
}
</script>

<style scoped>
  .container {
    display: flex;
  }
</style>
