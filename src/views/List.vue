<template>
  <div class="container animated slideInDown">
    <h1> Products </h1>
    <div class="d-flex mx-auto animated slideInDown" style="min-height: 100%">
    <img src="../assets/ddf7620b1a1af96d24f1413bb336f096.gif"  alt="login-page" style="margin-left:350px; width:400px;height:400px;">
       </div>
    <button class="btn btn-primary m-4" @click="showFormAddProduct"><i class="fas fa-sticky-note"></i> Add New Product</button>
    <table class="table border table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Image</th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
          <Product v-for="data in $store.state.products" v-bind:key="data.id" :data="data">
          </Product>
      </tbody>
    </table>
    <hr>
  </div>
</template>

<script>
import Product from '../components/Product.vue'
export default {
  name: 'Login',
  data() {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: '',
      nameUpdate: '',
      image_urlUpdate: '',
      priceUpdate: '',
      stockUpdate: '',
    }
  },
  components: {
    Product,
  },
  created() {
    this.$store.dispatch('getProducts')
    console.log(this.stockUpdate, 'this.stockUpdate')
    console.log(this.$store.state.selectedProduct.stock, 'this.$store.state.selectedProduct.stock')
  },
  methods: {
    increment() {
      this.$store.commit('INCREMENT')
    },
    showFormAddProduct() {
      this.$store.dispatch('moveToPage')
    },
    processAddProduct() {
      const newData = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
      };
      this.showformAdd = false;
      this.$store.dispatch('processAddProduct', newData)
    },
    processEditProduct() {
      const updatedData = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
      };
      this.$store.dispatch('processUpdateProduct', updatedData)
    },
  },
};
</script>

<style>
  h1{
    font-family: 'Lobster', cursive;
    font-size: 40pt;
  }
</style>