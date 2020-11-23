<template>
<div class="editproduct">
  <div class="container mr-5">
    <div style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 ml-5">
      <div class="panel panel-info">
        <div class="panel-heading">
          <div class="panel-title">Add Product</div>
        </div>

        <div style="padding-top:30px" class="panel-body">
          <div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>
          <form @submit.prevent="Add" class="form-horizontal" role="form">

            <div style="margin-bottom: 25px" class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
              <input type="text" v-model="name" class="form-control" placeholder="Product Name">
            </div>
            <div style="margin-bottom: 25px" class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
              <input type="text" class="form-control" v-model="image_url" placeholder="image_url">
            </div>
            <div style="margin-bottom: 25px" class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
              <input type="number" class="form-control" placeholder="stock" v-model="stock">
            </div>
            <div style="margin-bottom: 25px" class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
              <input type="number" class="form-control" placeholder="price" v-model="price">
            </div>
            <div style="margin-bottom: 25px" class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
            <select v-model="category">
              <option disabled value="">Please select one</option>
               <option v-for="option in categories" :value="option.name" :key="option.id">
                {{ option.name }}
              </option>>
            </select>
            </div>
            <div style="margin-top:10px" class="form-group">
              <div class="col-sm-12 controls">
                <button type="submit" class="btn btn-success">Add Product </button>
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
  name: 'AddProduct',
  data() {
    return {
      name: '',
      image_url: '',
      stock: '',
      price: '',
      category: ''
    }
  },
  methods: {
    toDashboard() {
      this.$router.push({
        name: 'Dashboard'
      })
    },
    fetchCategories() {
      this.$store.dispatch('fetchCategories')
    },
    Add() {
      const token = localStorage.getItem("token");
      const payload = {
        token: token,
        name: this.name,
        image_url: this.image_url,
        stock: +this.stock,
        price: +this.price,
        category: this.category
      }
      this.$store.dispatch('add', payload)
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
    this.fetchCategories()
  },
  computed: {
    categories() {
      return this.$store.state.categories
    }
  },
}
</script>

<style scoped>

</style>
