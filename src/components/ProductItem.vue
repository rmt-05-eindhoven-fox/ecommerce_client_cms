<template>
  <tr>
    <th scope="row">{{ num + 1 }}</th>
    <td>{{ product.name }}</td>
    <td><img :src="product.image_url" alt="Product" width="auto" height="300"></td>
    <td>{{ product.category }}</td>
    <td>{{ product.price }}</td>
    <td>{{ product.stock }}</td>
    <td>
      <button type="button" class="btn btn-info">Edit</button> ||
      <button type="button" class="btn btn-danger">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['product', 'num']
}
</script>

<style>

</style>
