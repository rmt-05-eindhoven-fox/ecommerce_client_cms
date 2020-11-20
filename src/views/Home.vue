<template>
  <div class="Home">
    <Navbar/>
    <div class="row m-5">
      <div class="container d-flex flex-wrap">
        <div
        v-for="(product, i) in products"
        :key="i">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <img :src="product.img_url"><br><br>
              <h6 class="card-text">Price: {{ product.price }}</h6>
              <h6 class="card-text">Stock: {{ product.stock }}</h6>
              <button @click="editProduct(product.id)" class="btn btn-primary mr-2">Edit</button>
              <button @click="deleteProduct(product.id)" class="btn btn-primary">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/navbar'
export default {
  name: 'Home',
  components: {
    Navbar
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    editProduct (id) {
      this.$router.push(`/EditForm/${id}`)
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
        .then(result => {
          this.fetchProducts()
          this.$swal('HEYY!! You successfully deleted your product!')
        })
        .catch(err => {
          this.$swal('ERRORR!!\n' + err.response.data)
        })
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

<style scoped>
  img {
    width: 200px;
    height: 240px;
  }
</style>
