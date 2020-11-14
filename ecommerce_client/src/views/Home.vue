<template>
  <div>
   <img alt="Vue logo" src="../assets/landing1.png" height="250px">
   <br>
   <button @click="addProduct" type="button" class="btn btn-success mt-3">Add New Product!</button>
   <br>
   <button @click.prevent="logout" type="button" class="btn btn-danger">Sign Out</button>
   <HelloWorld :msg="title"/>
  <div class="row">
  <div class="col-sm-6">
    <div v-for="product in products" :key="product.id" class="card">
      <div class="card-body">
        <h5 class="card-title">{{product.name}}</h5>
        <img :src="product.image_url" height="150px">
        <br>
        <label class="mt-3" for="price">{{product.price}}</label>
        <br>
        <label for="stock">{{product.stock}}</label>
        <br>
        <button @click="editProduct" type="submit" class="btn btn-primary mt-3">Edit Product</button>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data () {
    return {
      name: '',
      image_url: '',
      price: 0,
      stock: 0
    }
  },
  components: {
    HelloWorld
  },
  computed: {
    title () {
      return this.$store.state.title
    },
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
    addProduct () {
      this.$router.push('addProduct')
    },
    editProduct () {
      this.$store.dispatch('editProduct')
    },
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>
