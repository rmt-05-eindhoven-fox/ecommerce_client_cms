<template>
  <div v-if="loading" class="page-loader-wrapper" style="display: block; opacity: 0.8;">
    <div class="d-flex justify-content-center">
      <lottie-player class="p-t-70 m-0" src="https://assets7.lottiefiles.com/datafiles/nT4vnUFY9yay7QI/data.json" mode="bounce" background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: ['loading']
}
</script>

<style>

</style>
