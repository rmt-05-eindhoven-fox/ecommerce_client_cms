<template>
  <div class="addProduct">
    <div class="d-flex justify-content-center navbar">
      <p class="navbar-title">
        ADD PRODUCT
      </p>
    </div>

  <div class="container">
    <div class="wrapper">
      <div id="formContent">
        <!-- Icon -->
        <h1>Add Product</h1>

        <!-- Login Form -->
        <form @submit.prevent="addProduct">
          <div class="input-group flex-nowrap">
            <div class="input-group-prepend">
              <span class="input-group-text" id="addon-wrapping"><i class="fas fa-tags"></i></span>
            </div>
            <input v-model="name" type="text" class="form-control" placeholder="Product name" aria-describedby="addon-wrapping">
          </div>
          <div class="input-group flex-nowrap mt-5">
            <div class="input-group-prepend">
              <span class="input-group-text" id="addon-wrapping"><i class="fas fa-link"></i></span>
            </div>
            <input v-model="image_url" type="url" class="form-control" placeholder="http://" aria-describedby="addon-wrapping">
          </div>
          <div class="input-group flex-nowrap mt-5">
            <div class="input-group-prepend">
              <span class="input-group-text" id="addon-wrapping"><i class="fas fa-dollar-sign"></i>.</span>
            </div>
            <input v-model.number="price" type="number" class="form-control" placeholder="Price" aria-describedby="addon-wrapping">
          </div>
          <div class="input-group flex-nowrap mt-5">
            <div class="input-group-prepend">
              <span class="input-group-text" id="addon-wrapping"><i class="fas fa-cubes"></i></span>
            </div>
            <input v-model.number="stock" type="number" class="form-control" placeholder="Stock" aria-describedby="addon-wrapping">
          </div>
          <input class="mt-5" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    addProduct () {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addProduct', payload)
        .then(({ data }) => {
          this.$router.push('/dashboard')
        })
        .catch(err => (
          console.log(err)
        ))
    }
  }
}
</script>

<style scoped>
.text-left {
  padding-left: 20px;
}
.navbar {
  background: #2c393f;
  color: white;
  height: 7vh;
}
.navbar-title {
  font-size: 20px;
  margin: auto;
}
.addProduct {
  background: #ededed;
  height: 100vh;
}
.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}
#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 20px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}
</style>
