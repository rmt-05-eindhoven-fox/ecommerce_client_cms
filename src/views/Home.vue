<template>
  <div class="home">
    <!-- <div id="nav"> -->
      <!-- <router-link to="/homepage">Home | </router-link> -->
      <!-- <router-link to="/add-product">Add Product | </router-link> -->
      <!-- <a href="#" @click="logout">Logout</a> -->
      <!-- <button @click="logout">Logout</button> -->
    <!-- </div> -->
     <nav class="navbar navbar-light">
        <a href="" class="navbar-brand p-2">
          <svg width="30px" height="30px" viewBox="0 0 16 20" class="bi bi-people-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
          </svg>
          Logged in as:  <small>{{email}}</small>
        </a>
        <router-link to="/">
          <button @click="logout" class="btn btn-info btn-lg">
          <span class="glyphicon glyphicon-log-out"></span> Log out
          </button>
        </router-link>
      </nav>
    <div class="container">
      <div class="card">
        <div class="card-header">
          Product List
          <router-link to="/add-product">
            <a href="#">
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-square" fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                      d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path fill-rule="evenodd"
                      d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </a>
          </router-link>
        </div>

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
            <td>
              <a style="align-text: center;" target="_blank" :href="product.image_url">
                <img :src="product.image_url" alt="Forest">
              </a>
            </td>
            <td>{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.stock }}</td>
            <td><button type="button" class="btn btn-info" @click="goToEditForm(`/edit-product/${product.id}`)">Edit</button></td>
            <td><button type="button" class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button></td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      email: ''
    }
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
      localStorage.removeItem('email')
    },
    welcomeUser () {
      const email = localStorage.getItem('email')
      this.email = email
    }
  },
  created () {
    this.fetchAllProducts()
    this.welcomeUser()
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style scoped>
  nav {
    background-color: #739299;
    margin-bottom: 75px;
  }
  .card-header {
    font-size: 25px;
    font-weight: 400;
  }
  .card-header a {
    align-items: flex-end;
    float: right;
  }
  img {
    display: flex;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 75px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
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
