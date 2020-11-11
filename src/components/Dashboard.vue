<template>
  <div>
    <!-- NAVBAR -->
    <!-- <div class="py-1 shadow-sm">
    <nav class="px-4">
        <div id="logo" class="font-weight-bold">
        <div >E-commerce CMS</div>
        </div>
        <div style="display: flex; align-items: center; font-size: 12px">
        <a @click.prevent = "changePage('addProduct')" class="pr-1" href="#">Add</a>
        <i type="button" class="fas fa-plus-square pr-4" data-toggle="modal" data-target="#add-task">
        </i>
        <div class="pr-3">{{email}}</div>
        <a @click.prevent = "changePage('login')" class="text-decoration-none px-2" href="#">LOG OUT</a>
        </div>
    </nav>
    </div> -->

    <div class="container hello">
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(product, index) in products"
            :key="product.id"
          >
              <td>{{index + 1}}</td>
              <td class="w-20"><img :src="product.image_url" style="width: 200px; height: 180px; object-fit: contain"></td>
              <td>{{product.name}}</td>
              <td>{{product.price}}</td>
              <td>{{product.stock}}</td>
              <td>
                  <button @click="changePage(`editProduct/${product.id}`)" class="btn btn-primary">Edit</button>
                  <button @click="deleteProduct (product.id)" class="btn btn-danger">Delete</button>
              </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    changePage (path) {
      this.$store.dispatch('changePage', path)
    },
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
        .then(() => {
          this.fetchProduct()
        })
        .catch(err => {
          if (+err.response.status === 404) {
            this.$router.push({ name: 'NotFound' })
          } else {
            console.log(err.response.data)
          }
        })
    }
  },
  created () {
    this.fetchProduct()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  /* .img-thumbnail {
    padding: .25rem;
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: .25rem;
  }
  .img-fluid, .img-thumbnail {
    max-width: 100%;
    height: auto;
  } */
  /* .w-20 {
    width: 50%!important;
  } */
</style>
