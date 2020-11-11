<template>
    <Login />
</template>

<script>
import Login from '@/components/Login.vue'
export default {
  name: 'Landing',
  components: {
    Login
  }
}
</script>

<style scoped>
  * {
    background-image: url('../../public/images/2741840.jpg');
    background-repeat: no-repeat;
    background-size: 800px;
    background-position-y: -55px;
    background-position-x: 50px;
  }
</style>
