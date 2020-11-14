<template>
  <div class="container">
    <div class="card bg-light" id="form">
        <div class="card-body">
          <div class="close">
            <router-link to="/homepage">
            <a>
               <svg width="30px" height="30px" viewBox="0 0 16 16" class="bi bi-x-circle" fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                     d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path fill-rule="evenodd"
                     d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
               </svg>
              </a>
            </router-link>
        </div>
          <h2 class="text-center" style="color: black;">Add Product</h2><br>
          <form @submit.prevent="addProduct">
            <div class="form-group">
              <input v-model="product.name" type="text" class="form-control" name="name" placeholder="Enter product name" aria-describedby="nameHelp">
            </div>

            <div class="form-group">
              <input v-model="product.category" type="text" class="form-control" name="category" placeholder="Enter product category">
            </div>

            <div class="form-group">
              <input v-model="product.image_url" type="url" class="form-control" name="url" placeholder="Enter product image">
              <small id="emailHelp" class="form-text text-muted" style="text-align: left;">Example: http://linktoanimage.com/image01.jpg</small>
            </div>

            <div class="form-group">
              <input v-model="product.stock" type="number" class="form-control" name="stock" placeholder="Enter product stock">
              <small id="emailHelp" class="form-text text-muted" style="text-align: left;">Product stock must be in number format.</small>
            </div>

            <div class="form-group">
              <input v-model="product.price" type="number" class="form-control" name="price" placeholder="Enter product price">
              <small id="emailHelp" class="form-text text-muted" style="text-align: left;">Product price must be in number format.</small>
            </div><br>
            <button type="submit" id="button" class="btn btn-primary deep-purple btn-block">Add Product</button><br>
          </form>
        </div>
    </div>
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
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 20px;
  }

  #form {
      width: 450px;
      border-radius: 25px;
      background: white;
  }
</style>
