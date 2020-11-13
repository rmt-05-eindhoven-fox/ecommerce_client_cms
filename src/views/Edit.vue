<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
    <div class="p-5 bg-light shadow" style="width: 30%; height: 115%; border-radius: 10px;">
    <h2 class="text-center">Edit Product</h2>
    <img class="w-100" src="@/assets/undraw_edit_photo_2m6o.png" alt="new product">
    <form class="mt-4" @submit.prevent="edit">
        <div class="form-group">
          <label for="name">Name</label>
          <input class="form-control" v-model="name" type="text" placeholder="product's name" required>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input class="form-control" v-model="description" type="text" placeholder="product's description" required>
        </div>
        <div class="form-group">
          <label for="stock">Stock</label>
          <input class="form-control" type="number" v-model="stock" min="1" placeholder="available stock" required>
        </div>
        <div class="form-group">
          <label for="stock">Image</label>
          <input class="form-control" type="text" v-model="image" placeholder="product's image url" required>
        </div>
        <div class="form-group">
          <label for="stock">price</label>
          <input class="form-control" type="number" v-model="price" min="1" placeholder="product's price" required>
        </div>
        <button class="btn btn-block text-white" type="submit" style="background-color: #42b0f8;"> Edit</button>
        <button class="btn btn-block btn-danger" @click.prevent="cancel" > Cancel</button>
    </form>
    </div>
  </div>
</template>

<script>
import axios from '../axios/axiosInstance.js'
export default {
  name: 'Edit',
  data () {
    return {
      image: localStorage.getItem('image'),
      stock: Number(localStorage.getItem('stock')),
      name: localStorage.getItem('name'),
      description: localStorage.getItem('description'),
      price: Number(localStorage.getItem('price'))
    }
  },
  methods: {
    edit () {
      const id = localStorage.getItem('id')
      const token = localStorage.getItem('access_token')
      //   console.log(this.image)
      console.log(this.description)
      console.log(this.name)
      axios({
        method: 'put',
        url: `/products/${id}`,
        headers: { access_token: token },
        data: {
          image: this.image,
          stock: this.stock,
          name: this.name,
          description: this.description,
          price: this.price
        }
      })
        .then(({ data }) => {
          this.$router.push({ name: 'Products' })
          localStorage.removeItem('name')
          localStorage.removeItem('price')
          localStorage.removeItem('stock')
          localStorage.removeItem('image')
          localStorage.removeItem('description')
          localStorage.removeItem('id')
        })
        .catch(err => console.log(err, 'masuk ke sini'))
    },
    cancel () {
      this.$router.push({ name: 'Products' })
    },
    created () {
      console.log(this.data)
    }
  }
}
</script>

<style>

</style>
