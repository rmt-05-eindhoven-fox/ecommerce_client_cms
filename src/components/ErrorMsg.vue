<template>
  <div class="alert alert-danger" role="alert" data-auto-dismiss="2000">
    <strong>{{ errorMsg }}</strong>
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
