<template>
  <div class="halo">
    <SignInForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import SignInForm from '@/components/SignIn-Form.vue'

export default {
  name: 'SignIn',
  components: {
    SignInForm
  }
}
</script>

<style scoped>

</style>
