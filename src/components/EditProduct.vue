<template>
  <div class="editProduct">
    <div class="d-flex justify-content-around navbar">
      <div></div>
      <p class="navbar-title">
        EDIT PRODUCT
      </p>
      <button @click="logout" class="btn btn-danger">Logout</button>
    </div>

    <div class="container mt-5">
      <div class="wrapper">
        <div id="formContent">
          <!-- Icon -->
          <img :src="image_url" alt="Product Image">

          <!-- Login Form -->
          <form @submit.prevent="editProduct">
            <div class="input-group flex-nowrap mt-5">
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
              <input v-model="price" type="number" class="form-control" placeholder="http://" aria-describedby="addon-wrapping">
            </div>
            <div class="input-group flex-nowrap mt-5">
              <div class="input-group-prepend">
                <span class="input-group-text" id="addon-wrapping"><i class="fas fa-cubes"></i></span>
              </div>
              <input v-model="stock" type="number" class="form-control" placeholder="http://" aria-describedby="addon-wrapping">
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
  name: 'EditProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    editProduct () {
      this.$loading(true)
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
        id: this.$route.params.id
      }
      this.$store.dispatch('putProduct', payload)
        .then(({ data }) => {
          this.$loading(false)
          this.$router.push('/dashboard')
        })
        .catch(err => (
          console.log(err)
        ))
    },
    fetchProductById () {
      const id = this.$route.params.id
      this.$store.dispatch('fetchProductById', id)
        .then(({ data }) => {
          if (!data[0]) {
            this.$router.push('/404')
          } else {
            this.name = data[0].name
            this.image_url = data[0].image_url
            this.price = data[0].price
            this.stock = data[0].stock
          }
        })
        .catch((err) => {
          if (err.response.status === 404) {
            this.$router.push('/404')
          } else {
            console.log(err)
          }
        })
    },
    logout () {
      localStorage.clear()
      this.$router.push('/')
    }
  },
  created () {
    this.fetchProductById()
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
.editProduct {
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
img {
  width: 150px;
  height: 150px;
}
.card {
  width: 40%;
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
