<template>
  <div class="card justify-content-between align-items-center">
    <p>name: {{ product.name }}</p>
    <div class="card">
      <img :src="product.image_url" width="50px" height="50px"/>
    </div>
    <p>price: {{ product.price }}</p>
    <p>stock: {{ product.stock }}</p>
    <button class="m-2 btn btn-primary" @click="goToDetail(product.id)">detail</button>
    <!-- <button class="m-2">edit</button> -->
    <!-- <div v-if="!confirmTodelete">
      <button @click="deleteConfirm(true)" class="m-2">delete</button>
    </div>
    <div v-else>
      <button @click="deleteProduct(product.id)" class="m-2">confirm</button>
      <button @click="deleteConfirm(false)" class="m-2">cancel</button>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  data () {
    return {
      confirmTodelete: false
    }
  },
  methods: {
    goToDetail (id) {
      this.$router.push(`/detail/${id}/data-product`)
    },
    deleteConfirm (val) {
      this.confirmTodelete = val
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
      this.router.push('/products')
    }
  }
}
</script>

<style>
.card {
  background-color: lightgrey;
  font-family: 'Roboto', sans-serif;
}
</style>
