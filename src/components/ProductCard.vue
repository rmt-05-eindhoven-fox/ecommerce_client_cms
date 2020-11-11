<template>
  <div >
    <p>name: {{ product.name }}</p>
    <img :src="product.image_url" width="50px" height="50px"/>
    <p>price: {{ product.price }}</p>
    <p>stock: {{ product.stock }}</p>
    <button class="m-2" @click="goToDetail(product.id)">detail</button>
    <button class="m-2">edit</button>
    <button class="m-2">delete</button>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    goToDetail (id) {
      this.$router.push({ name: 'Detail', params: { id } })
    }
  }
}
</script>

<style>

</style>
