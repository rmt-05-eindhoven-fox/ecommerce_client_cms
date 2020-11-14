<template>
 <div>
   <div class="nav">
            <button  @click.prevent="logout" class="btn btn-primary my-sm-0" type="button" style="border:solid 1px #FFFF">Logout</button>
   </div>
   <div class="sidebar">
     <ul class="list-group">
        <button @click.prevent="changePage('Product')">Product</button>
        <button @click.prevent="changePage('addProduct')">Add Product</button>
        <!-- <button @click.prevent="changePage('e')">Add Product</button> -->
     </ul>
   </div>
    <div class="content">
      <!-- <div class="d-flex" style="flex-wrap:no-wrap"> -->
      <!-- <Product
      v-for="product in products"
      :key="product.id"
      :product="product"
      /> -->
      <router-view/>

    <!-- </div> -->
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Product from '../components/Product'
// import AddProduct from '../components/AddProduct'
export default {
  name: 'Dashboard',
  components: {
    // Product
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
    deleteData () {
      this.$store.dispatch('deleteData')
    },
    addProduct () {
      this.$store.dispatch('addProduct')
    },
    changePage (path) {
      this.$router.push(`/dashboard/${path}`)
    }
  }
  // created () {
  //   this.fetchProduct()
  // }
}
</script>

<style scoped>
.nav {
   display: flex;
   justify-content:flex-end;
   padding-right:12px;
   padding-top: 6px;
   padding-bottom: 6px;
   height: 50px;
   background-color: white;
}

.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

/* Sidebar links */
.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}

/* Active/current link */
.sidebar a.active {
  background-color: #4CAF50;
  color: white;
}

/* Links on mouse-over */
.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}

/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}

/* On screens that are less than 700px wide, make the sidebar into a topbar */
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {float: left;}
  div.content {margin-left: 0;}
}

/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}

</style>
