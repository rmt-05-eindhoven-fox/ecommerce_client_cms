<template>
  <div class="col-3">
    <div class="card" style="width: 18rem">
      <img :src="productList.image_url" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">
          {{ productList.name }}
        </p>
        <p class="card-text">
          {{ productList.price }}
        </p>
        <p class="card-text">
          {{ productList.stock }}
        </p>
      </div>
      <button
        class="btn btn-warning"
        @click.prevent="goToUpdateProduct(productList.id)"
      >
        Update
      </button>
      <a class="btn btn-danger" @click.prevent="deleteProduct(productList.id)"
        >Delete</a
      >
    </div>
  </div>
</template>

<script>
import axios from '../axios/axiosinstance'
export default {
  name: 'ProductCard',
  props: ['productList'],
  methods: {
    goToUpdateProduct (payload) {
      this.$router.push({ name: 'Update', params: { id: payload } })
    },
    deleteProduct (id) {
      const token = localStorage.token
      axios({
        url: `/product/${id}`,
        method: 'delete',
        headers: { token }
      })
        .then(({ data }) => {
          this.$emit('fetchProductLists')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style>
</style>
