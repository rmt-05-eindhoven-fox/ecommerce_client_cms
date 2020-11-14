<template>
  <div class="container">
    <div class="text-center mt-5">
      <h1>Add Product</h1>
    </div>
    <div class="form-add mt-3">
      <form @submit.prevent="postAddProduct">
        <div class="form-group">
          <label for="name">Product Name</label>
          <input class="form-control" type="text" v-model="name" placeholder="eg: Macbook Air">
        </div>
        <div class="form-group">
          <label for="image_url">Image Url</label>
          <input class="form-control" type="url" v-model="image_url" placeholder="eg: https://static.bhphoto.com/images.jpg">
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input class="form-control" type="number" v-model="price" placeholder="eg: 12000">
        </div>
        <div class="form-group">
          <label for="stock">Stock</label>
          <input class="form-control" type="number" v-model="stock" placeholder="eg: 10">
        </div>
        <div class="form-group dropdown">
            <label for="category">
                <i class="fas fa-layer-group"></i>
                Choose a category:
            </label><br>
            <select class="form-control" name="category" id="category" v-model="category">
                <option value="" disabled>---Select one---</option>
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
          <button class="btn btn-primary btn-block" type="submit">Add</button>
        </div>
      </form>
    </div>
    <div class="cancel mt-2 mb-5">
      <button @click="toHome" class="btn btn-danger btn-block">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      pageName: 'addProduct',
      name: '',
      image_url: '',
      price: '',
      stock: '',
      category: ''
    }
  },
  methods: {
    toHome () {
      this.$router.push('/')
    },
    postAddProduct () {
      this.$store.dispatch('addProduct', {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
        category: this.category
      })
      this.$router.push('/')
    }
  }

}
</script>

<style>

</style>
