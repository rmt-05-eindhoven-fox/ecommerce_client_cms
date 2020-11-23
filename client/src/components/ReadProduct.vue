<template>
  <div class="container mt-4">
    <div class=button-add>
      <button @click.prevent="toAddProduct" class="btn btn-primary">Add Product</button>
    </div>
    <div class="mt-3 table-responsive scroll">
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr class="text-center">
            <th>No</th>
            <th>Product Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center table-warning" v-for="(product, index) in products" :key="product.id">
            <td>{{ index + 1 }}.</td>
            <td>{{ product.name }}</td>
            <td><img :src="product.image_url" width="80"/></td>
            <td>Rp {{ product.price }}</td>
            <td>{{ product.stock }}</td>
            <td>{{ product.category }}</td>
            <td>
              <button class="btn btn-success" @click.prevent="showEdit(product.id)"
              >Edit</button> ||
              <button class="btn btn-danger" @click.prevent="destroy(product.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReadProduct',
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  data () {
    return {
      pageName: 'readProduct'
    }
  },
  created () {
    this.fetchProduct()
  },
  methods: {
    toAddProduct () {
      this.$router.push('/addProduct')
    },
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    },
    showEdit (id) {
      this.$router.push(`/editProduct/${id}`)
    },
    destroy (id) {
      this.$store.dispatch('delete', id)
    }
  }
}
</script>

<style>

</style>
