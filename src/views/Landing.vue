<template>
  <div>
    <button @click.prevent="gotoLogin" type="button" class="btn btn-primary">Login</button>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  methods: {
    gotoLogin () {
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style>

</style>
