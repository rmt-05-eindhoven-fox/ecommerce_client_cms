<template>
<div class="editproduct">
  <div class="container mr-5">
    <div style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 ml-5">
      <div class="panel panel-info">
        <div class="panel-heading">
          <div class="panel-title">Edit Product</div>
        </div>

        <div style="padding-top:30px" class="panel-body">
          <div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>
          <form @submit.prevent="edit" class="form-horizontal" role="form">

            <div style="margin-bottom: 25px" class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
              <input type="text" v-model="product.name" class="form-control" placeholder="Product Name">
            </div>
            <div style="margin-bottom: 25px" class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
              <input type="text" class="form-control" v-model="product.image_url" placeholder="image_url">
            </div>
            <div style="margin-bottom: 25px" class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
              <input type="number" class="form-control" placeholder="stock" v-model="product.stock">
            </div>
            <div style="margin-bottom: 25px" class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
              <input type="number" class="form-control" placeholder="price" v-model="product.price">
            </div>
            <div style="margin-bottom: 25px" class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
            <select v-model="product.Category.name">
              <option disabled value="">Please select one</option>
               <option v-for="option in categories" :value="option.name" :key="option.id">
                {{ option.name }}
              </option>>
            </select>
            </div>
            <div style="margin-top:10px" class="form-group">
              <div class="col-sm-12 controls">
                <button type="submit" class="btn btn-success">Edit Product </button>
                <button @click="toDashboard" class="btn btn-danger ml-3">Go Back</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from '../axios/axiosInstance'

export default {
  name: 'EditProduct',
  methods: {
    toDashboard() {
      this.$router.push({
        name: 'Dashboard'
      })
    },
    fetchProductById() {
      const id = +this.$route.params.id
      const token = localStorage.getItem("token");
      const payload = {
        token: token,
        id: id
      }
      this.$store.dispatch('fetchProductById', payload)
    },
    fetchCategories() {
      this.$store.dispatch('fetchCategories')
    },
    edit() {
      const token = localStorage.getItem("token");
      const id = +this.$route.params.id
      const payload = {
        token: token,
        id: id,
        name: this.product.name,
        image_url: this.product.image_url,
        stock: this.product.stock,
        price: this.product.price,
        category: this.product.Category.name
      }
      this.$store.dispatch('edit', payload)
        .then(({
          data
        }) => {
          this.$router.push({
            name: 'Dashboard'
          })
          Swal.fire({
            icon: "success",
            title: "Success",
            text: data.msg,
          });
        })
        .catch(err => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: err.response.data.msg,
          });
        })
    }
  },
  created() {
    this.fetchProductById(),
    this.fetchCategories()
  },
  computed: {
    product() {
      return this.$store.state.product
    },
    categories() {
      return this.$store.state.categories
    }
  },
}
</script>

<style scoped>

</style>
