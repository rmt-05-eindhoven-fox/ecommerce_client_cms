<template>
  <div class="container">
    <div class="text-center mt-5">
      <h1>Edit Product</h1>
    </div>
    <div class="form-add mt-3">
      <form @submit.prevent="postEditProduct">
        <div class="form-group">
          <label for="name">Name Product</label>
          <input class="form-control" type="text" v-model="product.name">
        </div>
        <div class="form-group">
          <label for="image_url">Image Url</label>
          <input class="form-control" type="url" v-model="product.image_url">
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input class="form-control" type="number" v-model="product.price">
        </div>
        <div class="form-group">
          <label for="stock">Stock</label>
          <input class="form-control" type="number" v-model="product.stock">
        </div>
        <div class="form-group dropdown">
            <label for="category">
                <i class="fas fa-layer-group"></i>
                Choose a category:
            </label><br>
            <select name="category" id="category" v-model="product.category">
                <option value="">---Select one---</option>
                <option value="SmartWatch">SmartWatch</option>
                <option value="Laptop">Laptop</option>
                <option value="SmartPhone">SmartPhone</option>
                <option value="Tablet">Tablet</option>
                <option value="PowerBank">PowerBank</option>
                <option value="Aksesoris">Aksesoris</option>
                <option value="Lainnya">Lainnya</option>
            </select>
        </div>
        <div>
          <button class="btn btn-success" type="submit">Edit</button>
        </div>
      </form>
    </div>
    <div class="cancel mt-2 mb-5">
      <button @click="toHome" class="btn btn-danger">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditProduct',
  data () {
    return {
      pageName: 'editProduct',
      product: {
        name: '',
        image_url: '',
        price: '',
        stock: '',
        category: ''
      }
    }
  },
  methods: {
    getProductById () {
      const id = {
        id: this.$route.params.id
      }
      // console.log(this.$route.params.id)
      this.$store.dispatch('getProductById', id.id)
        .then(res => {
          console.log(res, 'ini ressssss')
          this.product.name = res.data.dataProduct.name
          this.product.image_url = res.data.dataProduct.image_url
          this.product.price = res.data.dataProduct.price
          this.product.stock = res.data.dataProduct.stock
          this.product.category = res.data.dataProduct.category
        })
        .catch(err => console.log(err.response))
    },
    toHome () {
      this.$router.push('/')
    },
    postEditProduct () {
      this.$store.dispatch('editProduct', {
        id: this.$route.params.id,
        name: this.product.name,
        image_url: this.product.image_url,
        price: this.product.price,
        stock: this.product.stock,
        category: this.product.category
      })
      this.$router.push('/')
    }
  },
  created () {
    this.getProductById()
  }
}
</script>

<style>

</style>
