<template>
  <div class="row mb-3">
    <div class="col-md-auto border">
      <img :src="product.image_url" height="200" alt="" srcset="">
    </div>
    <div class="col-md">
      <div class="card-header border">
        <div class="row px-3 d-flex justify-content-between">
          <div class="pt-1">
            <h5>{{product.name}}</h5>
          </div>
          <div>
            <a href="#" @click.prevent="goToEditProduct(product.id)" class="btn btn-info btn-sm mx-1"><i class="fas fa-edit"></i></a>
            <a href="#" @click.prevent="deleteProduct(product.id)" class="btn btn-danger btn-sm"><i class="far fa-trash-alt"></i></a>
          </div>
        </div>
      </div>
      <div class="card-body border">
        <p class="card-text">{{product.description}}</p>
        <h6 class="card-title"><i class="fas fa-tags"></i> : Rp. {{product.price}}</h6>
        <h6 class="card-title"><i class="fas fa-layer-group mr-1"></i> : {{product.stock}} Items</h6>
        <p class="card-text">Category : {{product.Category.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../config/axios'

export default {
  name: 'Products',
  props: ['product'],
  methods: {
    deleteProduct (id) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        url: `/products/${+id}`,
        method: 'DELETE',
        headers: {
          access_token: accessToken
        }
      }).then((result) => {
        this.$router.push({ name: 'Dashboard' })
      }).catch((err) => {
        console.log(err.response.data.msg)
      })
    },
    goToEditProduct (id) {
      this.$router.push({ name: 'EditProduct', params: { id } })
    }
  }
}
</script>

<style>

</style>
