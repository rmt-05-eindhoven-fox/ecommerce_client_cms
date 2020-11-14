<template>
  <md-card @click.native="showProduct" md-with-hover>
    <md-ripple>
      <div class="md-layout md-gutter md-alignment-center-center">
        <div class="md-layout-item md-size-25">
          <md-card-media>
            <img :src="product.image_url">
          </md-card-media>
        </div>
        <div class="md-layout-item">
          <md-card-header>
            <div class="md-title">
              <p class="text-left">{{ product.name }}</p>
            </div>
          </md-card-header>
          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-size-40">
                <div class="price text-left">
                  <md-icon>local_atm</md-icon>
                  <span> {{ price }}</span>
                </div>
                <div class="stock text-left">
                  <md-icon>local_offer</md-icon>
                  <span v-if="product.stock > 0" > {{ product.stock }} item(s)</span>
                  <span v-else> Out of stock</span>
                </div>
              </div>
              <div class="md-layout-item">
                <div class="text-left">
                  <p>Categories</p>
                  <md-chip v-if="!product.categories.length" class="category-chip">No Category</md-chip>
                  <md-chip
                  v-for="category in product.categories"
                  :key="category.id"
                  class="category-chip md-accent"
                  >{{ category.name }}</md-chip>
                </div>
              </div>
            </div>
          </md-card-content>
        </div>
      </div>
    </md-ripple>
  </md-card>
</template>

<script>
export default {
  name: 'ProductCard',
  props: [
    'product'
  ],
  computed: {
    price () {
      const num = Number(this.product.price).toLocaleString('id-ID')
      const price = 'Rp. ' + num + ',-'
      return price
    }
  },
  methods: {
    showProduct () {
      const id = this.product.id
      this.$store.dispatch('productDetail', id)
      this.$router.push({ name: 'EditProduct', params: { id: id } })
    }
  }
}
</script>

<style>
.category-chip {
  margin-top: 4px;
}
</style>
