<template>
  <div class="home" id="home">
    <div id="navAddProduct">
      <router-link to='/AddProduct' class="btn btn-primary">Add Product</router-link>
    </div>
    <div id="logout-button">
      <button @click.prevent="logout" id="logout" class="btn btn-danger">Logout</button>
    </div>
    <ProductItem></ProductItem>
  </div>
</template>

<script>
import ProductItem from '../components/ProductItem.vue'
export default {
  name: 'Home',
  components: {
    ProductItem
  },
  data () {
    return {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cleanpng.com%2Fpng-online-shopping-shopping-cart-software-e-commerce-948780%2F&psig=AOvVaw3tU3lAG7HlpYSxau1O5Arv&ust=1605191036113000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCG8eLY-uwCFQAAAAAdAAAAABAJ'
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
