<template>
  <div class="products-content-container">
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <h2 class="text-left">{{ title }} <span class="badge badge-count">{{products.length}}</span></h2>
      </div>
      <div class="md-layout-item">
        <div class="text-right">
          <md-button @click="goToAdd" class="md-raised md-accent">Add</md-button>
        </div>
      </div>
    </div>
    <div class="products-content scrollable">
      <div v-if="!products.length" class="empty-state">
        <img class="empty-illustration" src="../assets/empty-category.svg" alt="empty-state">
        <h4 class="text-muted empty-state-info">Product not found</h4>
      </div>
      <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      ></ProductCard>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard'

export default {
  name: 'ProductsContent',
  components: {
    ProductCard
  },
  props: ['products', 'title'],
  methods: {
    goToAdd () {
      this.$router.push('/products/add')
    }
  }
}
</script>

<style>
  .products-content {
    margin-top: 16px;
    max-height: 80vh;
    overflow: auto;
  }

  .stock {
    margin-top: 16px;
  }

  .badge-count {
    background-color: #ff5252;
    color: white;
  }

  .empty-state-info {
    margin-top: 16px;
  }
</style>
