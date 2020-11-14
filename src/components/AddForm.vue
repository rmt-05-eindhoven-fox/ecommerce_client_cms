<template>
  <div class="d-flex justify-content-space-around align-content-lg-center container">
    <Navbar />
    <form @submit.prevent="addProduct">
      <div class="body"></div>
      <div class="header">
        <div style="color: black">Add Product</div>
      </div>
      <div class="addForm">
        <input type="text" v-model="name" placeholder="name" /><br />
        <input
          type="text"
          v-model="image_url"
          placeholder="imagerUrl"
        /><br />
        <input type="number" v-model="price" placeholder="Price" /><br />
        <input type="number" v-model="stock" placeholder="Stock" /><br />
        <input type="submit" value="SUBMIT PRODUCT" />
      </div>
    </form>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: 'addProduct',
  components: {
    Navbar
  },
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
      this.$store
        .dispatch('addProduct', payload)
        .then(() => {})
        .catch((err) => {
          console.log(err.response.data.errors)
        })
    }
  }
}
</script>

<style scoped>
.header {
  position: absolute;
  top: calc(25% - 35px);
  left: calc(58% - 255px);
  z-index: 2;
}
.header div {
  float: left;
  font-family: "Exo", sans-serif;
  font-size: 40px;
  font-weight: 300;
}

.body {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: auto;
  height: auto;
  background-color: lightseagreen;
  background-size: cover;
}

.addForm {
  position: absolute;
  top: calc(40% - 75px);
  left: calc(40% - 50px);
  height: 200px;
  width: 350px;
  padding: 10px;
  z-index: 2;
}
.addForm input[type="text"] {
  width: 390px;
  height: 50px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 2px;
  color: black;
  font-family: "Exo", sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 4px;
  margin-top: 3px;
}
.addForm input[type="number"] {
  width: 390px;
  height: 50px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 2px;
  color: black;
  font-family: "Exo", sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 4px;
  margin-top: 3px;
}
.addForm input[type="submit"] {
  width: 390px;
  height: 50px;
  background: black;
  cursor: pointer;
  border-radius: 2px;
  color: #a18d6c;
  font-family: "Exo", sans-serif;
  font-size: 25px;
  font-weight: 400;
  padding: 6px;
  margin-top: 10px;
}
</style>
