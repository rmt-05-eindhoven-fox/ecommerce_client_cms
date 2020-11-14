<template>
  <div id="edit-banner">
    <h1 class="page-title" style="font-size: 50px; margin-top: 30px">
      Edit Banner
    </h1>
    <EditBannerForm />
  </div>
</template>

<script>
import EditBannerForm from '@/components/EditBannerForm.vue'
export default {
  name: 'EditBanner',
  components: {
    EditBannerForm
  }
}
</script>

<style>
</style>
