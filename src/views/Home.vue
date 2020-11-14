<template>
  <div class="h-screen">
    <Header />
    <Content />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import Content from '@/components/Content.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Header,
    Content
  }
}
</script>
