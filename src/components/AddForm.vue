<template>
  <div id="add-form">
    <form @submit.prevent="addProduct" class="add-form">
      <div class="form-group">
        <label for="product-name">Name of Product</label>
        <input
          v-model="product.name"
          type="text"
          class="form-control"
          id="product-name"
          placeholder="Enter name of product"
        />
      </div>
      <div class="form-group">
        <label for="product-category">Category of Product</label>
        <input
          v-model="product.category"
          type="text"
          class="form-control"
          id="product-category"
          placeholder="Enter category of product"
        />
      </div>
      <div class="form-group">
        <label for="product-image-url">Image URL</label>
        <input
          v-model="product.image_url"
          type="url"
          class="form-control"
          placeholder="Enter image url"
        />
      </div>
      <div class="form-group">
        <label for="product-price">Price of Product</label>
        <input
          v-model="product.price"
          type="number"
          class="form-control"
          id="product-price"
          placeholder="Enter price of product"
        />
      </div>
      <div class="form-group">
        <label for="product-price">Stock of Product</label>
        <input
          v-model="product.stock"
          type="number"
          class="form-control"
          id="product-stock"
          placeholder="Enter stock of product"
        />
      </div>
      <button type="submit" class="add-btn btn btn-light">Add Product</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddForm',
  data () {
    return {
      product: {
        name: '',
        category: '',
        image_url: '',
        stock: '',
        price: ''
      }
    }
  },
  methods: {
    addProduct () {
      const payload = {
        name: this.product.name,
        category: this.product.category,
        image_url: this.product.image_url,
        stock: +this.product.stock,
        price: +this.product.price
      }

      this.$store.dispatch('addProduct', payload)
        .then(() => {
          this.$router.push({ name: 'Home' })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
  #add-form {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 20px;
  }

  .add-form{
    background-color: #e1b12c;
    width: 500px;
    padding: 30px;
    border-radius: 0.3em;
    color: #fff;
  }

  .add-btn {
    align-items: center;
  }
</style>
