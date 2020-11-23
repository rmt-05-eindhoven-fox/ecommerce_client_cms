<template>
  <div>
    <h1 class="page-title">Edit Product</h1>
    <FormEditProduct/>
  </div>
</template>

<script>
import FormEditProduct from '@/components/FormEditProduct.vue'

export default {
  name: 'EditProduct',
  components: {
    FormEditProduct
  },
  methods: {
  }
}
</script>