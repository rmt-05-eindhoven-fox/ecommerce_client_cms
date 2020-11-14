<template>
  <div class="formContainer">
 <Navbar/>
  <form @submit.prevent="editProduct">
     <div class="header">
      <div style="color: black">Edit Product</div>
    </div>
      <div class="editForm">
        <input type="text" v-model="dataProduct.name" placeholder="name"><br>
        <input type="text" v-model="dataProduct.image_url" placeholder="imager_Url"><br>
        <input type="number" v-model="dataProduct.price" placeholder="Price" ><br>
        <input type="number" v-model="dataProduct.stock" placeholder="Stock"><br>
        <input type="submit" value="SUBMIT">
      </div>
    </form>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: 'editProduct',
  components: {
    Navbar
  },
  computed: {
    dataProduct () {
      return this.$store.state.dataProduct
    }
  },
  methods: {
    editProduct () {
      const payload = {
        id: this.$route.params.id,
        name: this.dataProduct.name,
        image_url: this.dataProduct.image_url,
        price: this.dataProduct.price,
        stock: this.dataProduct.stock
      }
      this.$store.dispatch('editPage', payload)
        .then(({ data }) => {
          this.$router.push({ path: '/products' })
        })
        .catch(err => {
          // const msg = err.response.data.errors
          console.log(err.response.data.errors)
        })
    }
  }
}
</script>

<style scoped>
.formContainer{
  background-color: orange;
  display: flex;
  justify-content: center;
  align-content: center;
}
.header {
  position: absolute;
  top: calc(25% - 35px);
  left: calc(58% - 255px);
  z-index: 2;
}
.header div {
  float: left;
  color: black;
  font-family: "Exo", sans-serif;
  font-size: 40px;
  font-weight: 300;
}

.header div span {
  color:white !important;
}
.editForm {
  position: absolute;
  top: calc(40% - 75px);
  left: calc(40% - 50px);
  height: 200px;
  width: 350px;
  padding: 10px;
  z-index: 2;
}
.editForm input[type="text"] {
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
.editForm input[type="number"] {
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
.editForm button[type="submit"] {
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
