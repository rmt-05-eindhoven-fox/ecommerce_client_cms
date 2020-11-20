<template>
  <div>
      <Navbar/>
      <h1>Edit Product Form</h1>
      <div class="container mt-5" style="width:30%;" >
        <form @submit.prevent="editProduct">
          <div>
            <label class="form-group">Name</label>
            <input v-model="productData.name" class="form-control" type="text" placeholder="Book">
          </div>
          <div>
            <label class="form-group">Insert image URL</label>
            <input v-model="productData.img_url" class="form-control" type="text" placeholder="img_asakd">
          </div>
          <div>
            <label class="form-group">Price</label>
            <input v-model="productData.price" class="form-control" type="number" placeholder="100000">
          </div>
          <div>
            <label class="form-group">Stock</label>
            <input v-model="productData.stock" class="form-control" type="number" placeholder="10">
          </div>
          <button type="submit" class="btn btn-primary mt-4">Submit</button>
        </form>
      </div>
    </div>
</template>

<script>
import Navbar from '../components/navbar'
export default {
  name: 'EditForm',
  data () {
    return {
      data: this.product,
      productData: {
        name: '',
        img_url: '',
        price: 0,
        stock: 0
      }
    }
  },
  components: {
    Navbar
  },
  methods: {
    fetchProductById () {
      const id = this.$route.params.id
      this.$store.dispatch('fetchProductById', id)
        .then(result => {
          console.log(result, '<<<<hai')
          const data = result.data.result[0]
          this.productData.name = data.name
          this.productData.img_url = data.img_url
          this.productData.price = data.price
          this.productData.stock = data.stock
        })
        .catch(err => {
          console.log(err)
        })
    },

    editProduct () {
      const id = this.$route.params.id
      this.$store.dispatch('editProduct', { productData: this.productData, id })
        .then(result => {
          this.$router.push({ name: 'Home Page' })
          this.$swal('Hey, your product successfully edited!')
        })
        .catch(err => {
          this.$swal('ERRORR!!\n' + err.response.data)
        })
    }
  },
  created () {
    this.fetchProductById()
  }
}
</script>

<style>

</style>
