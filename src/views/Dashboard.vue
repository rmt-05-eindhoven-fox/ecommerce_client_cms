<template>
  <section class="dashboard">
    <!-- SIDEBAR -->
    <Sidebar />
    <div class="main-dash">
      <!-- LIST PRODUCT -->
      <div class="page-title">
        <h1>Dashboard</h1>
        <p>Recent added product</p>
      </div>
      <!-- PRODUCT CARD -->
      <ProductCard />
      <!-- PRODUCT FORM -->
      <AddForm />
    </div>
  </section>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import ProductCard from '@/components/ProductCard.vue'
import AddForm from '@/components/AddForm.vue'
export default {
  name: 'Dashboard',
  components: {
    Sidebar,
    ProductCard,
    AddForm
  }
}
</script>

<style>
</style>
