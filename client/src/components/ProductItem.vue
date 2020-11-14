<template>
  <div>
      <h2>Product Page</h2>
      <div class="product-list">
          <div class="container">
              <!-- {{products}} -->
              <table class="table">
                  <thead class="thead-dark">
                      <tr>
                          <th>Name</th>
                          <th>Image</th>
                          <!-- <th>Category</th> -->
                          <th>Price</th>
                          <th>Stock</th>
                          <th>Options</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="product in products" :key="product.id">
                          <td>
                              <p>{{product.name}}</p>
                          </td>
                          <td>
                              <img :src="product.image_url" alt="product-image">
                          </td>
                          <td>
                              <p>Rp. {{product.price}}</p>
                          </td>
                          <td>
                              <p>{{product.stock}}</p>
                          </td>
                          <td>
                              <button class="btn btn-primary" @click="editpage(product.id)">Edit</button>
                              <button class="btn btn-info" @click="deletepage(product.id)">Delete</button>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {
    this.productData()
  },
  computed: {
    products () {
      return this.$store.state.dataProduct
    }
  },
  methods: {
    productData () {
      this.$store.dispatch('productFetch')
    },
    editpage (id) {
      this.$router.push({ name: 'EditProduct', params: { id } })
    },
    deletepage (id) {
    //   console.log(id, '<< id')
      this.$store.dispatch('delete', id)
        .then(() => {
          this.productData()
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  }
}
</script>

<style>

</style>
