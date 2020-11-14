<template>
  <tr>
    <td>
      <img :src="el.image_url" alt="product-image" style="width:200px; height:200px;">
    </td>
    <td>
      <p>{{el.name}}</p>
    </td>
    <td>
      <p>Rp. {{el.price}}</p>
    </td>
    <td>
      <p>{{el.stock}}</p>
    </td>
    <td>
      <button class="btn btn-warning" @click="editPage(el.id)">Edit</button> |
      <button class="btn btn-danger" @click="deleted(el.id)">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'product-page',
  data () {
    return {}
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    
  }
}
</script>

<style>
</style>
