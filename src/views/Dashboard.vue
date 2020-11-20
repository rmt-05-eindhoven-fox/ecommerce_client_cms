<template>
<div class="dashboard">
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" style="font-family: impact; font-size: 2em;">{{storeName}}</a>
      <div class="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
        <button @click="toAddCategory" class="btn btn-info btn-sm ml-3" href="">
          Add Category
        </button>
        <button @click="toAddBanner" class="btn btn-warning btn-sm ml-3" href="">
          Add Banner
        </button>
        <button @click="toAddProduct" class="btn btn-primary btn-sm ml-3" href="">
          Add Item
        </button>
        <button @click="logout" class="btn btn-danger btn-sm ml-3">
          Logout
        </button>
      </div>
    </div>
  </nav>
  <section class="jumbotron text-center">
    <div class="container">
      <h1 class="jumbotron-heading">{{headerLabel}}</h1>
    </div>
  </section>
  <div class="container mb-4">
    <div class="row">
      <div class="col-12">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col"> </th>
                <th scope="col">Product</th>
                <th scope="col" class="text-center">Stock</th>
                <th scope="col" class="text-right">Price</th>
                <th scope="col" class="text-right">Category</th>
                <th> </th>
              </tr>
            </thead>
            <ProductList v-for="product in products" :key="product.id" :product="product" />
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from '../axios/axiosInstance'
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'Dashboard',
  components: {
    ProductList
  },
  methods: {
    fetchProducts() {
      const token = localStorage.getItem("token");
      this.$store.dispatch('fetchProducts', token)
    },
    logout() {
      Swal.fire({
          title: "Are you sure?",
          text: "U really want to leave?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, log me out!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            localStorage.clear();
            this.$router.push({
              name: 'Login'
            })
            Swal.fire("Logged out!", "See you later, Mr.Admin.", "success");
          } else {
            this.$router.push({
              name: 'Dashboard'
            })
          }
        });
    },
    toAddProduct() {
      this.$router.push({
        name: 'AddProduct'
      })
    },
    toAddCategory() {
      this.$router.push({
        name: 'AddCategory'
      })
    },
    toAddBanner() {
      this.$router.push({
        name: 'AddBanner'
      })
    }
  },
  computed: {
    headerLabel() {
      return this.$store.state.headerLabel
    },
    storeName() {
      return this.$store.state.storeName
    },
    products() {
      return this.$store.state.products
    }
  },
  created() {
    this.fetchProducts()
  },
}
</script>

<style scoped>
.bloc_left_price {
  color: #c01508;
  text-align: center;
  font-weight: bold;
  font-size: 150%;
}

.category_block li:hover {
  background-color: #007bff;
}

.category_block li:hover a {
  color: #ffffff;
}

.category_block li a {
  color: #343a40;
}

.add_to_cart_block .price {
  color: #c01508;
  text-align: center;
  font-weight: bold;
  font-size: 200%;
  margin-bottom: 0;
}

.add_to_cart_block .price_discounted {
  color: #343a40;
  text-align: center;
  text-decoration: line-through;
  font-size: 140%;
}

.product_rassurance {
  padding: 10px;
  margin-top: 15px;
  background: #ffffff;
  border: 1px solid #6c757d;
  color: #6c757d;
}

.product_rassurance .list-inline {
  margin-bottom: 0;
  text-transform: uppercase;
  text-align: center;
}

.product_rassurance .list-inline li:hover {
  color: #343a40;
}

.reviews_product .fa-star {
  color: gold;
}

.pagination {
  margin-top: 20px;
}
</style>
