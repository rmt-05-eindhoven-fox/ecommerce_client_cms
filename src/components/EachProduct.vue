<template>
  <tr>
    <th scope="row">{{ no+1 }}</th>
    <td scope="row"><img :src="product.imgUrl" alt=""></td>
    <td scope="row">{{ product.name }}</td>
    <td scope="row">{{ product.price }}</td>
    <td scope="row">{{ product.stock }}</td>
    <td scope="row">
      <button class="btn-sm btn-warning" data-toggle="modal" :data-target="'#modalEditProduct' + product.id">Edit</button> |
      <EditProduct :product="product"/>
      <button class="btn-sm btn-danger" @click.prevent="deleteProduct">Delete</button>
    </td>
  </tr>
</template>

<script>
import EditProduct from './EditProduct.vue'
export default {
  name: 'EachProduct',
  data () {
    return {
      editproduct: {}
    }
  },
  props: ['product', 'no'],
  components: {
    EditProduct
  },
  methods: {
    deleteProduct () {
      const id = this.product.id
      this.$store.dispatch('deleteProduct', id)
    }
  }
}
</script>

<style>

</style>
