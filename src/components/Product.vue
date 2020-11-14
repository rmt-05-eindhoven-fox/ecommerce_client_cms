<template>
  <div class="container row">
    <div class="pt-5 col-3"
            v-for="product in Product" :key="product.id">
        <div class="card">
         <img
            class="card-img-top"
            :src="product.image_url"
            alt="dummy"
            style="height: 250px"
            font-scale="1"
          />
        <div class="card-body">
            <h5>Name</h5>
            <h4 class="card-title">
            <strong><a href="">{{ product.name }}</a></strong>
            </h4>
          <p class="is-pulled-right">
            <span class="title is-4"><strong>&euro; {{ product.price }}</strong></span></p>
        </div>
        <div class="card-footer">
            <button
              @click="deleteProduct(product.id)"
              class="button is-small float-left"
            >
              <span class="icon is-small">
                <i class="fas fa-trash-alt"></i>
              </span>
            </button>
            <button @click.prevent="editProduct(product.id)" class="button is-small float-right">
              <span class="icon is-small">
                <i class="far fa-edit"></i>
              </span>
            </button>
          </div>
        </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'Product',
  props: ['product'],
  components: {
  },
  methods: {

    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    },

    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
      this.fetchProduct()
    },

    editProduct (id) {
      this.$router.push(`/dashboard/editProduct/${id}`)
    }
  },
  computed:
    {
      Product () {
        return this.$store.state.products
      }
    },
  created () {
    this.fetchProduct()
  }
}
</script>

<style scoped>

</style>
