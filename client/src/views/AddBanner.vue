<template>
  <div id="add-banner">
    <h1 class="page-title" style="font-size: 50px; margin-top: 30px">
      Add Banner
    </h1>
    <AddBannerForm />
  </div>
</template>

<script>
import AddBannerForm from '@/components/AddBannerForm.vue'
export default {
  name: 'AddBanner',
  components: {
    AddBannerForm
  }
}
</script>

<style>
</style>
