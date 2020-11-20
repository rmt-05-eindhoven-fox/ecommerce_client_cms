<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button @click="editProduct" class="btn btn-primary mr-2">Edit</button>
      <button @click="deleteProduct" class="btn btn-primary">Delete</button>
    </div>
  </div>
</template>

<script>
import axios from '../axios/axiosInstance'
export default {
  name: 'Product-Card',
  methods: {
    deleteProduct () {
      axios({
        url: '/products',
        method: 'DELETE',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(result => {
          this.$router.push('Home')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
