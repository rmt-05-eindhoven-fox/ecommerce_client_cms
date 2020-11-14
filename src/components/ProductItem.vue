<template>
  <div class="col-3">
    <div class="card">
      <div class="card-body">
        <img :src="product.image_url" style="width:200px;height:200px;">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">Price : {{ product.price }} Stock : {{ product.stock }}</p>
        <button class="btn btn-primary" @click="toEditForm">Edit</button>
        <button class="btn btn-danger" @click="deleteProduct">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['product', 'i'],
  methods: {
    deleteProduct () {
      const id = +this.product.id
      this.$store.dispatch('deleteProduct', id)
        .then(res => {
          this.$swal(
            'Delete Success!',
            `Delete Product with id ${id}`,
            'success'
          )
          this.fetchProduct()
        })
        .catch(err => {
          this.$swal(
            'Error',
            `${err.response.status} ${err.response.data.error.split(',')}`,
            'error' // success,error,warning
          )
        })
    },
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    },
    toEditForm () {
      this.$router.push(`/edit/${this.product.id}`)
    }
  }
}
</script>

<style>

</style>
