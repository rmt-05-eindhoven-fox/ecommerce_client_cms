<template>
  <div class="container pt-10">
      <form @submit.prevent="editProduct">
        <div class="form-row">
          <div class="form-group col-md-12">
            <label for="name">Name</label>
            <input v-model="name"   type="text" class="form-control" id="name">
          </div>
          <div class="form-group col-md-12">
            <label for="image_url">Image Url</label>
            <input v-model="image_url" type="text" class="form-control" id="image-url">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="price">Price</label>
            <input v-model="price" type="text" class="form-control" id="price">
          </div>
          <div class="form-group col-md-6">
            <label for="stock">Stock</label>
            <input v-model="stock" type="text" class="form-control" id="stock">
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'editProduct',
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
      this.$store.dispatch('editProduct', payload)
      this.$router.push('/dashboard/Product')
    },

    fatchProduct () {
      this.$store.dispatch('fetchProduct')
    },

    assignProduct () {
      this.name = this.Product[0].name
      this.image_url = this.Product[0].image_url
      this.price = this.Product[0].price
      this.stock = this.Product[0].stock
    }

  },
  computed: {
    Product () {
      return this.$store.state.products.filter(ele =>
        +ele.id === +this.$route.params.id
      )
    }
  },

  created () {
    this.fatchProduct()
    this.assignProduct()
  }
}
</script>
