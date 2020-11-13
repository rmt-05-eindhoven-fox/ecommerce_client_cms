<template>
  <div class="row">
    <div class="col-3">
        <div class="card mt-5" style="width: 20rem;">
        <img :src="product.image" class="card-img-top mb-3" alt="image" style="width: 200px; height: 150px; margin-left:auto; margin-right: auto">
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-text">Rp {{ product.price }}</p>
            <a href="#" class="btn btn-primary" @click.prevent="edit(product.id)">Edit</a>
            <a href="#" @click.prevent="erase(product.id)" class="btn btn-danger ml-3" >Delete</a>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
import axios from '../axios/axiosInstance.js'
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    edit (id) {
      const token = localStorage.getItem('access_token')
      console.log(id)
      axios({
        method: 'get',
        url: `/products/${id}`,
        headers: { access_token: token }
      })
        .then(({ data }) => {
          console.log(data)
          localStorage.setItem('id', data.id)
          localStorage.setItem('name', data.name)
          localStorage.setItem('price', data.price)
          localStorage.setItem('stock', data.stock)
          localStorage.setItem('image', data.image)
          localStorage.setItem('description', data.description)
          this.$router.push({ name: 'Edit', params: { id } })
          // this.$emit('edit', data)
        })
        .catch(err => console.log(err))
    },
    erase (id) {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'delete',
        url: `/products/${id}`,
        headers: { access_token: token }
      })
        .then(() => {
          this.$router.push({ name: 'Products' })
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>

<style>

</style>
