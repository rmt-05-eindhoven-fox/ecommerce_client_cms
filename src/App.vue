<template>
  <div id='app'>
    <!-- Overlay For Sidebars -->
    <div class="overlay"></div>
    <!-- Page Loader -->
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'App'
}
</script>
