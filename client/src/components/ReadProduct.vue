<template>
  <div class="container mt-5">
    <div class="mt-3 table-responsive scroll">
      <table class="table table-striped">
        <thead>
          <tr class="text-center">
            <th>No</th>
            <th>Product Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center" v-for="(product, index) in products" :key="product.id">
            <td>{{ index + 1 }}.</td>
            <td>{{ product.name }}</td>
            <td><img :src="product.image_url" width="80"/></td>
            <td>Rp {{ product.price }}</td>
            <td>{{ product.stock }}</td>
            <td>
              <button class="btn btn-success" @click.prevent="showEdit(product.id)"
              >Edit</button> ||
              <button class="btn btn-danger" @click="destroy(product.id)">Delete</button>
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
