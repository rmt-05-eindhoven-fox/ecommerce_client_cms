<template>
  <div class="alert alert-success" role="alert">
    {{ successMsg }}
  </div>
</template>

<script>
export default {
  name: 'SuccessMsg',
  props: ['successMsg']
}
</script>

<style>
</style>
