<template>
  <div class="dashboard">
    <ListProducts msg="Cards Catalogue"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListProducts from '@/components/ListProducts.vue'

export default {
  name: 'Dashboard',
  components: {
    ListProducts
  }
}
</script>
