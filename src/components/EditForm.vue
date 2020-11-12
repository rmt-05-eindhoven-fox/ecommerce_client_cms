<template>
  <div id="edit-form">
    <form @submit.prevent="editProduct" class="edit-form">
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
        <label for="product-name">Category of Product</label>
        <input
          v-model="product.category"
          type="text"
          class="form-control"
          id="product-name"
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
      <button type="submit" class="edit-btn btn btn-light">Edit Product</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  data () {
    return {
      product: []
    }
  },
  methods: {
    getProduct () {
      const id = +this.$route.params.id
      this.$store.dispatch('getProductById', id)
        .then(({ data }) => {
          this.product = data
        })
        .catch(err => {
          console.log(err)
        })
    },
    editProduct () {
      const payload = {
        id: this.product.id,
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
  },
  created () {
    this.getProduct()
  }
}
</script>

<style scoped>
  #edit-form {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 20px;
  }

  .edit-form {
    background-color: #e1b12c;
    width: 500px;
    padding: 30px;
    border-radius: 0.3em;
    color: #fff;
  }

  .edit-btn {
    align-items: center;
  }
</style>
