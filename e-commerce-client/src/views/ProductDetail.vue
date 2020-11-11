<template>
  <div class="container">
    <h1>Product Detail</h1>
    <img :src="product.image_url" alt="">
    <h3>{{ product.name }}</h3>
    <h3>{{ product.price }}</h3>
    <h3>{{ product.stock }}</h3>

  </div>
</template>

<script>
import axios from '../axios/axiosInstance'

export default {
  name: 'ProductDetail',
  data () {
    return {
      product: {}
    }
  },
  methods: {
    fetchOneProduct () {
      const id = this.$route.params.id
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'get',
        url: `/product/${id}`,
        headers: {
          access_token: accessToken
        }
      })
        .then(({ data }) => {
          console.log(data)
          this.product = data
        })
        .catch(error => {
          console.log(error.response)
        })
    }
  },
  created () {
    this.fetchOneProduct()
  }
}
</script>

<style>

</style>
