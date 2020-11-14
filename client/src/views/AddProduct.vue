<template>
  <div>
    <h1 class="page-title">Add Product Page</h1>
    <AddProductForm />
  </div>
</template>

<script>
import AddProductForm from '@/components/AddProductForm.vue'

export default {
  name: 'AddProduct',
  components: {
    AddProductForm
  },
  methods: {
    logOut () {
      localStorage.clear()
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>
