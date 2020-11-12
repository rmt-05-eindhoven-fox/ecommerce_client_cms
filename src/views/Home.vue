<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home | </router-link>
      <router-link to="/add-product">Add Product | </router-link>
      <a href="#" @click="logout">Logout</a>
    </div>
    <div class="container">
      <table class="table table-striped ">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Category</th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
          <th scope="col" colspan="2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, id) in products" :key="id">
          <td scope="row">{{ product.id }}</td>
          <!-- <td><img :src="product.image_url" alt="" srcset="" height="200px" width="200px"></td> -->
          <td>
            <a target="_blank" :href="product.image_url">
              <img :src="product.image_url" alt="Forest">
            </a>
          </td>
          <td>{{ product.name }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <td><button @click="goToEditForm(`/edit-product/${product.id}`)">Edit</button></td>
          <td><a href="#" @click="deleteProduct(product.id)">Delete</a></td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  methods: {
    fetchAllProducts () {
      this.$store.dispatch('fetchAllProducts')
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
        .then(() => {
          this.fetchAllProducts()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    goToEditForm (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('logout')
    }
  },
  created () {
    this.fetchAllProducts()
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style scoped>
  img {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 150px;
  }
  img:hover {
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
  }
  body {
  font-family: "Open Sans", sans-serif;
  line-height: 1.25;
  }
  table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;
  }
  table caption {
    font-size: 1.5em;
    margin: .5em 0 .75em;
  }
  table tr {
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    padding: .35em;
  }
  table th,
  table td {
    padding: .625em;
    text-align: center;
  }
  table th {
    font-size: .85em;
    letter-spacing: .1em;
    text-transform: uppercase;
  }
  @media screen and (max-width: 600px) {
  table {
    border: 0;
  }
  table caption {
    font-size: 1.3em;
  }
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }
  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }
  table td::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  table td:last-child {
    border-bottom: 0;
  }
}
</style>
