<template>
  <div>
    <div class="container-fluid d-flex justify-content-between p-3 border bg-light">
      <h3>E-COMMERCE</h3>
      <div>
        <button v-on:click="addPage" class="btn btn-primary">Add Content</button>
        <button v-on:click="logout" class="btn btn-danger">Sign out</button>
      </div>
    </div>
      <table class="table table-bordered table-hover" style="margin: auto; width: 100%;">
        <thead class="thead-light">
          <th scope="col">Product Image</th>
          <th scope="col">Product Name</th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
          <th scope="col">Action</th>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>
              <img :src="product.image_url" alt="product-image" style="width:200px; height:200px;">
            </td>
            <td>
              <p>{{product.name}}</p>
            </td>
            <td>
              <p>Rp. {{product.price}}</p>
            </td>
            <td>
              <p>{{product.stock}}</p>
            </td>
            <td>
              <button class="btn btn-warning" @click="editPage(product.id)">Edit</button> |
              <button class="btn btn-danger" @click="deleted(product.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    fetchAll () {
      this.$store.dispatch('fetchAll')
    },
    logout () {
      localStorage.clear()
      this.$router.push({ name: 'Login Page' })
    },
    addPage () {
      this.$router.push({ name: 'Add Page' })
    },
    editPage (id) {
      this.$router.push({ name: 'Edit Page', params: { id } })
    },
    deleted (id) {
      return this.$store.dispatch('deleted', id)
        .then((res) => {
          this.$router.push({ name: 'Content' })
          this.fetchAll()
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  },
  created () {
    this.fetchAll()
  }
}
</script>

<style>
</style>
