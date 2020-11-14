<template>
  <div class="container">
    <div class="container justify-content-center align-items-center">
      <div class="card rounded shadow justify-content-center align-items-center" style="height:50%;">
        <div v-if="error" class="alert alert-danger text-center" role="alert">
          <p v-for="(er, i) in error" :key="i">{{ er }}</p>
        </div>
        <h2>Add Product</h2>
        <form @submit.prevent="addProduct"  style="width:75%;">
            <input class="form-control text-center" type="text" v-model="name" name="name" placeholder="Insert Product Name Here">
            <input class="form-control text-center" type="url" v-model="image_url" name="image_url" placeholder="Insert Product Image Url Here e.g. https://wow.com">
            <input class="form-control text-center" type="text" v-model="price" name="price" placeholder="Insert Product Price Here e.g. 5000">
            <input class="form-control text-center" type="number" v-model="stock" name="stock" placeholder="Insert Product Stock Here">
            <button class="btn btn-primary" type="submit">Add Product</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add-page',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  computed: {
    error () {
      return this.$store.state.error
    }
  },
  methods: {
    addProduct () {
      const data = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addProduct', data)
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
    }
  }

}
</script>

<style>

</style>
