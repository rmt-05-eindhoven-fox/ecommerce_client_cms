<template>
  <div class="flex-col h-auto w-auto m-5 p-2 bg-yellow-500">
    <div class="mb-3">
      {{ product.name }}
    </div>
    <img :src="`${product.image_url}`" class="h-40 mb-3"/>
    <div class="mb-3">
      Rp {{ product.price }}
    </div>
    <div class="mb-3">
      Stock   {{ product.stock }}
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
