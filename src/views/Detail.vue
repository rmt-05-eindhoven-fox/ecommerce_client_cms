<template>
  <div>
    <h1>{{ product.name }}</h1>
    <div class="container justify-content-between">
      <div class="row">
        <div class="col-4">
          <img :src="product.image_url" :alt="product.name" width="210" height="250" class="card">
        </div>
        <div class="col-8">
          <div v-if="errorMessage.length > 0">
            <h5 class="card">Customer is {{ errorMessage }}</h5>
          </div>
          <button @click="changeChild('data-product')" class="m-1 btn btn-info">Data</button>
          <button @click="changeChild('edit-product')" class="m-1 btn btn-primary">Edit</button>
          <button @click="changeChild('delete-product')" class="m-1 btn btn-danger">Delete</button>
          <div class="card mt-3">
              <router-view/>
          </div>
        </div>
        <div class="col-12 mt-5">
          <button class="m-1 btn btn-secondary col-3" @click="backToProducts">Back</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
    }
  },
  methods: {
    fetchOne () {
      const id = this.$route.params.id
      this.$store.dispatch('fetchOne', { id })
    },
    backToProducts () {
      this.$router.push('/products')
      // this.$router.push({ name: 'Products' })
    },
    changeChild (path) {
      const id = this.$route.params.id
      this.$router.push(`/detail/${id}/${path}`)
    }
  },
  computed: {
    product () {
      return this.$store.state.product
    },
    errorMessage () {
      return this.$store.state.errorMessage
    }
  },
  created () {
    this.fetchOne()
  }
}
</script>

<style scoped>
.card {
  background-color: white;
}
</style>
