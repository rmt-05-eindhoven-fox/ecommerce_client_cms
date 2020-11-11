<template>
  <div>
    <h1>Detail page</h1>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <img :src="product.image_url" :alt="product.name" width="210" height="250">
        </div>
        <div class="col-6">
          <button @click="changeChild('data')" class="m-1">Data</button>
          <button @click="changeChild('edit')" class="m-1">Edit</button>
          <router-view/>
          <div>
            <p>Name: {{ product.name }}</p>
            <p>Price: {{ product.price }}</p>
            <p>Stock: {{ product.stock }}</p>
            <p>Created: {{ product.createdAt }}</p>
            <p>Updated: {{ product.updatedAt }}</p>
          </div>
          <button class="m-1" @click="backToProducts">Back</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../axios/axiosInstance'

export default {
  name: 'Detail',
  data () {
    return {
      product: {}
    }
  },
  methods: {
    fetchProduct () {
      const id = this.$route.params.id

      axios({
        url: '/products/' + id,
        method: 'GET'
      })
        .then(({ data }) => {
          // console.log(data)
          if (data) {
            this.product = data
          } else {
            this.$router.push({ name: 'NotFound' })
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    backToProducts () {
      this.$router.push('/products')
      // this.$router.push({ name: 'Products' })
    },
    changeChild (path) {
      const id = this.$route.params.id
      this.$router.push(`/detail/${id}/${path}`)
    }
  },
  created () {
    this.fetchProduct()
  }
}
</script>

<style>

</style>
