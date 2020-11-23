<template>
<tbody>
  <tr>
    <td><img :src="product.image_url" style="width:150px" /> </td>
    <td>{{product.name}}</td>
    <td>{{product.stock}}</td>
    <td class="text-right">{{product.price}}</td>
    <td class="text-right">{{product.Category.name}}</td>
    <td class="text-right">
      <button @click="toEdit(product.id)" class="btn btn-sm btn-warning mr-2"><i class="fa fa-edit"></i> </button>
      <button @click="deleteProd(product.id)" class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button>
    </td>
  </tr>
</tbody>
</template>

<script>
import axios from '../axios/axiosInstance'

export default {
  name: 'ProductList',
  props: ['product'],
  methods: {
    toEdit(productId) {
      this.$router.push(`/EditProduct/${productId}`)
    },
    deleteProd(productId) {
      const token = localStorage.getItem("token");
      const id = +productId;
      const payload = {
        token: token,
        id: id
      }
      this.$store.dispatch('deleteProd', payload)
        .then(({
          data
        }) => {
          this.$router.go({
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
