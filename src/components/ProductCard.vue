<template>
  <div class="col-12 col-md-4">
    <div class="card">
      <div class="card-body">
        <img class="mb-2" :src="product.image_url" alt="" />
        <p class="product-title">{{ product.name }}</p>
        <p>Stock: {{ product.stock }}</p>
        <p class="font-weight-bold">{{ formatMoney }}</p>
        <div class="btn-section">
          <button class="btn btn-success" @click="updateProduct(product.id)">
            Update
          </button>
          <button
            class="btn btn-danger ml-2"
            @click="deleteProduct(product.id)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    deleteProduct (id) {
      this.$emit('deleteProduct', id)
    },
    updateProduct (id) {
      this.$router.push(`/edit-product/${id}`)
    }
  },
  computed: {
    formatMoney () {
      const price = this.product.price
      return price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })
    }
  }
}
</script>

<style>
</style>
