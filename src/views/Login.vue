<template>
  <div id="body">
    <LoginForm/>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>

<style>
 #body {
  font-family: 'Nunito';
  background-color:  #5d8fc9;
  height: 100vh;
 }

</style>
