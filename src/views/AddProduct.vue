<template>
  <div>
    <h1 class="page-title">Add New Product</h1>
    <FormAddProduct/>
  </div>
</template>

<script>
import FormAddProduct from '@/components/FormAddProduct.vue'

export default {
  name: 'AddProduct',
  components: {
    FormAddProduct
  },
  methods: {
  }
}
</script>