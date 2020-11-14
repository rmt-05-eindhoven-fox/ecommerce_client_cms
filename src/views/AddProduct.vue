<template>
    <div>
      <Navbar/>
      <h1>Add Product Form</h1>
      <div class="container mt-5" style="width:30%;" >
        <form @submit.prevent="addProduct">
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
  name: 'AddProductForm',
  data () {
    return {
      productData: {
        name: '',
        img_url: '',
        price: '',
        stock: ''
      }
    }
  },
  components: {
    Navbar
  },
  methods: {
    addProduct () {
      const payload = this.productData
      this.$store.dispatch('addProduct', payload)
        .then(result => {
          this.$router.push({ name: 'Home Page' })
          this.$swal('Successfully added!')
        })
        .catch(err => {
          this.$swal('ERRORR!!\n' + err.response.data)
        })
    }
  }
}
</script>

<style>

</style>
