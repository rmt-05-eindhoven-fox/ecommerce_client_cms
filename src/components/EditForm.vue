<template>
  <div class=" d-flex justify-content-center align-content-lg-center container">
 <Navbar/>
  <form @submit.prevent="editProduct">
    <div class="body"></div>
     <div class="header">
      <div style="color: black">Edit Product</div>
    </div>
      <div class="editForm">
        <input type="text" v-model="dataEdit.name" placeholder="name"><br>
        <input type="text" v-model="dataEdit.image_url" placeholder="imager_Url"><br>
        <input type="number" v-model="dataEdit.price" placeholder="Price" ><br>
        <input type="number" v-model="dataEdit.stock" placeholder="Stock"><br>
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
    dataEdit () {
      return this.$store.state.dataEdit
    }
  },
  methods: {
    editProduct () {
      const payload = {
        id: this.$route.params.id,
        name: this.dataEdit.name,
        image_url: this.dataEdit.image_url,
        price: this.dataEdit.price,
        stock: this.dataEdit.stock
      }
      this.$store.dispatch('editPage', payload)
        .then(({ data }) => {
          this.$router.push({ path: '/Products' })
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
  /* background-color: black; */
}

.header div span {
  color:white !important;
}
.body {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: auto;
  height: auto;
  background-color:orange;
  background-size: cover;
  /* -webkit-filter: blur(1px); */
  z-index: 0;
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
.editForm input[type="submit"] {
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
