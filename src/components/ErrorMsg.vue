<template>
  <div class="alert alert-danger" role="alert">
    {{ errorMsg || NoConnection }}
  </div>
</template>

<script>
export default {
  name: 'ErrorMsg',
  props: ['errorMsg'],
  data () {
    return {
      NoConnection: 'Connection Error'
    }
  }
}
</script>

<style>
</style>
