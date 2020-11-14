<template>
  <div class="row justify-content-md-center">
    <div class="col-8">
      <h2>Edit Product</h2>
      <form style="text-align: initial;" @submit.prevent="edit">
        <div class="form-group">
          <label>Name Product</label>
          <input type="text" class="form-control" v-model="name">
        </div>
        <div class="form-group">
          <label>Image URL</label>
          <input type="text" class="form-control" v-model="image_url">
        </div>
        <div class="form-group">
          <label>Price</label>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">Rp.</div>
            </div>
            <input type="number" class="form-control" id="inlineFormInputGroup" v-model="price">
          </div>
        </div>
        <div class="form-group">
          <label>Stock</label>
          <input type="number" class="form-control" v-model="stock">
        </div>
        <button type="submit" class="btn btn-primary">Edit Product</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditProduct',
  data () {
    return {
      id: '',
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    edit () {
      const payload = {
        id: this.id,
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('edit', payload)
    },

    fetchProductById () {
      const payload = {
        id: this.$route.params.id
      }
      this.$store.dispatch('fetchProductById', payload)
        .then(({ data }) => {
          this.id = data.id
          this.name = data.name
          this.image_url = data.image_url
          this.price = data.price
          this.stock = data.stock
        })
        .catch(err => console.log(err))
    }
  },
  created () {
    this.fetchProductById()
  }
}
</script>

<style>

</style>
