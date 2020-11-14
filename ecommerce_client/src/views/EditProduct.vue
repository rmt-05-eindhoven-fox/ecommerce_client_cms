<template>
<div class="form-add">
  <h2>Edit Product!</h2>
<form @submit.prevent="editProduct" class="mt-5">
  <div class="row">
    <div class="col">
      <label for="name">Name</label>
      <br>
      <input v-model="name" type="text" class="form-control" placeholder="name">
    </div>
    <br>
    <div class="col">
      <label for="image_url">Image URL</label>
      <input v-model="image_url" type="text" class="form-control" placeholder="www.google.com">
    </div>
  </div>
  <br>
  <div class="row">
    <div class="col">
      <label for="price">Price</label>
      <input v-model="price" type="number" class="form-control" placeholder="8000">
    </div>
    <div class="col">
      <label for="stock">Stock</label>
      <input v-model="stock" type="number" class="form-control" placeholder="1">
    </div>
  </div>
  <br>
    <button type="submit" class="btn btn-warning">Edit Product</button>
</form>
</div>
</template>

<script>
export default {
  name: 'EditProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: 0,
      stock: 0
    }
  },
  methods: {
    editProduct () {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
        id: this.$route.params.id
      }
      // console.log(payload)
      this.$store.dispatch('editCeleb', payload)
        .then(data => {
          this.$router.push('/home')
          this.fetchProduct()
          // console.log('coba masuk gak')
        })
        .catch(err => { console.log(err) })
    },
    fetchProduct () {
      this.$store.dispatch('fetchProducts')
    },
    showData () {
      this.name = this.products[0].name
      this.image_url = this.products[0].image_url
      this.price = this.products[0].price
      this.stock = this.products[0].stock
    }
  },
  computed: {
    products () {
      return this.$store.state.products.filter(el => +el.id === +this.$route.params.id)
    }
  },
  created () {
    this.fetchProduct()
    this.showData()
  }
}
</script>
