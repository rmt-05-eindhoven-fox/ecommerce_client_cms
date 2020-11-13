<template>
  <div class="home">
    <NavBar/>
    <img alt="Vue logo" :src="img" height="350px">
    <HelloWorld msg="Welcome to Endorphin Games store"/>
    <button class="btn btn-primary">click me</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    NavBar
  },
  data () {
    return {
      img: 'https://thumbs.dreamstime.com/b/eg-logo-monogram-triangle-shape-circle-rounded-isolated-gold-colors-style-black-background-design-template-176114635.jpg'
    }
  }
}
</script>
