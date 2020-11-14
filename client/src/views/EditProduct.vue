<template>
  <div id="edit-product">
    <h1 class="page-title">Edit Product Page</h1>
    <EditProductForm />
  </div>
</template>

<script>
import EditProductForm from '@/components/EditProductForm.vue'

export default {
  name: 'EditProduct',
  components: {
    EditProductForm
  }
}
</script>
