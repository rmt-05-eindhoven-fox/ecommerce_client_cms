<template>
  <div class="alert alert-success alert-dismissible fade show">
    <strong>{{ successMsg }}</strong>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
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
