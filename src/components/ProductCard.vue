<template>
  <div class="col-lg-4">
    <div class="card">
      <div class="card-body">
        <img
          class="mb-2"
          :src="product.image_url"
          alt=""
        />
        <h5>{{ product.name }}</h5>
        <p>Stock: {{ product.stock }}</p>
        <p class="font-weight-bold">{{ product.price }}</p>
        <button class="btn btn-success">Update</button>
        <button
          class="btn btn-danger ml-2"
          @click="deleteProduct(product.id)"
        >Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../axios/axios.js'
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    deleteProduct (id) {
      const token = localStorage.getItem('token')
      axios({
        url: `/product/${id}`,
        method: 'delete',
        headers: {
          token
        }
      })
        .then(response => {
          console.log(response)
          this.router.push('/dashboard')
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
