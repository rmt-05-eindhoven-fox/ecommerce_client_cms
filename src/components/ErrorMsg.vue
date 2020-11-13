<template>
  <div class="alert alert-danger" role="alert">
    {{ errorMsg }}
  </div>
</template>

<script>
export default {
  name: 'ErrorMsg',
  props: ['errorMsg']
}
</script>

<style>
</style>
