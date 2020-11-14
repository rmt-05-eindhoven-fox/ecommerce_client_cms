<template>
  <div class="flex-col h-auto w-auto">
    <div>
      {{ product.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product']
}
</script>

<style>

</style>
