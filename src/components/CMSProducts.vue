<template>
  <div>
      <div class="row mt-2 no-gutters">
        <div class="col-md-2 bg-light" style="height: 1000px;">
          <b-list-group class="list-group list-group-flush pt-2 p-2" style="text-align: left;">
            <b-list-group-item @click="increment" style="border-radius: 50px;" class="bg-warning mb-2"><font-awesome-icon :icon="['fas', 'tachometer-alt']" size="1x" /> Dashboard</b-list-group-item>
            <b-list-group-item style="border-radius: 50px;" class="bg-warning mb-2"><font-awesome-icon :icon="['fas', 'archive']" size="1x" /> Products</b-list-group-item>
            <b-list-group-item style="border-radius: 50px;" class="bg-warning mb-2"><font-awesome-icon :icon="['fas', 'list']" size="1x" /> Categories</b-list-group-item>
          </b-list-group>
        </div>
        <div class="col-md-10 pt-2 pl-5 pr-5 product-body">
          <div class="products">
            <h4 class="pt-3 text-left font-weight-bold m-4"> Products <b-button class="font-weight-bold float-right" variant="warning">Create New <font-awesome-icon :icon="['fas', 'plus-square']" /></b-button></h4>
            <table cellspacing="0" cellpadding="0" class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Stock</th>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center">
                  <th scope="row">1</th>
                  <td><p class="text-center"><img src="https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg"
                      style="max-width: 10rem; max-height: 5rem;"
                      class=" ml-auto mr-auto bg-light" /></p></td>
                  <td><p class="d-inline">MDL-072 TPA3116D2 XH-M543 2x120W CLASS D</p>
                  </td>
                  <td class="font-weight-bold text-center" ><p style="font-size: 16px;">Rp. 8.999.999</p></td>
                  <td class=" text-center"><b-badge variant="warning" style="color: white; font-size: 13px;">10 Items left</b-badge></td>
                </tr>
                <tr class="text-center" v-for="product in products" :key="product.id">
                  <th scope="row">{{product.id}}</th>
                  <td><p class="text-center"><img src="https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg"
                    style="max-width: 10rem; max-height: 5rem;"
                    class=" ml-auto mr-auto bg-light" /></p></td>
                  <td><p class="d-inline">{{product.name}}</p>
                  </td>
                   <td class="font-weight-bold text-center" ><p style="font-size: 16px;">Rp. {{product.price}}</p></td>
                  <td class=" text-center"><b-badge variant="warning" style="color: white; font-size: 13px;">{{product.stock}} Items left</b-badge></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CMSProducts',
  data () {
    return {
      selected: ''
    }
  },
  created () {
    this.checkCredentials()
  },
  methods: {
    checkCredentials () {
      const accessToken = localStorage.getItem('access_token')
      const role = localStorage.getItem('role')
      if (!accessToken) {
        this.$router.push('/login')
      } else {
        if (role === 'customer') {
          this.$router.push('/login')
        }
      }
    },
    increment () {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  mounted () {
    const accessToken = localStorage.getItem('access_token')
    this.$store.dispatch('fetchProducts', accessToken)
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300&display=swap');
  * {
    font-family: 'Hind Madurai', sans-serif;
  }

  body {
     background-color: #ffffff;
  }

  table {
    border: none !important;
  }

  .product-body{
    background-color: #E7EDF6;
  }

  .list-group{
    padding: 5;
  }

  .products{
    background-color: #FFFFFF;
    border-radius: 15px;
  }

  .card p {
    margin-top: -10px;
    margin-bottom: 1px;
  }

  .row .card:hover {
    box-shadow: 2px 2px 2px rgba(0,0,0,0.4);
    transform: scale(1.02);
  }

  tr td{
    text-align: left;
    max-width:250px;
  }

</style>
