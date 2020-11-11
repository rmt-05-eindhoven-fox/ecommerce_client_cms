<template>
  <div class="container">
    <Navbar></Navbar>
    <ReadProduct v-if="pageName === 'readProduct'"></ReadProduct>
    <AddProduct v-else-if="pageName === 'addProduct'"></AddProduct>
    <EditProduct v-else-if="pageName === 'editProduct'"></EditProduct>
  </div>
</template>

<script>
import ReadProduct from '../components/ReadProduct'
import Navbar from '../components/Navbar'
import AddProduct from '../components/AddProduct'
import EditProduct from '../components/EditProduct'
export default {
  name: 'Dashboard',
  data () {
    return {
      pageName: 'readProduct'
    }
  },
  components: { ReadProduct, Navbar, AddProduct, EditProduct }
}
</script>

<style>

</style>
