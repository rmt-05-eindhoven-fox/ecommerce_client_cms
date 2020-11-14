<template>
  <div class="container">
    <div class="container justify-content-center align-items-center">
    <div class="card rounded shadow justify-content-center align-items-center" style="height:50%;">
      <div v-if="error" class="alert alert-danger text-center" role="alert">
        <p v-for="(er, i) in error" :key="i">{{ er }}</p>
      </div>
      <h2>Edit Product</h2>
      <form @submit.prevent="editProduct" style="width:75%;">
        <input class="form-control text-center" type="text" v-model="name" name="name" placeholder="Insert Product Name Here">
        <input class="form-control text-center" type="url" v-model="image_url" name="image_url" placeholder="Insert Product Image Url Here e.g. https://wow.com">
        <input class="form-control text-center" type="text" v-model="price" name="price" placeholder="Insert Product Price Here e.g. 5000">
        <input class="form-control text-center" type="number" v-model="stock" name="stock" placeholder="Insert Product Stock Here">
        <button class="btn btn-primary" type="submit">Edit Product</button>
      </form>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'edit-page',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  computed: {
    fetchEditData () {
      return this.fetchProductById()
    },
    error () {
      return this.$store.state.error
    }
  },
  methods: {
    editProduct () {
      const id = this.$route.params.id
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
        id
      }
      this.$store.dispatch('editProduct', payload)
        .then((res) => {
          this.name = ''
          this.image_url = ''
          this.price = ''
          this.stock = ''
          this.$router.push({ name: 'Content' })
        })
        .catch((err) => {
          this.$store.dispatch('errorHandling', err.response.data)
          setTimeout(() => {
            this.$store.commit('errorHandling', '')
          }, 3000)
        })
    },
    fetchProductById () {
      const id = this.$route.params.id
      this.$store.dispatch('fetchProductById', id)
        .then((res) => {
          this.name = res.data.name
          this.image_url = res.data.image_url
          this.price = res.data.price
          this.stock = res.data.stock
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  },
  created () {
    this.fetchProductById()
  }
}
</script>

<style>

</style>
