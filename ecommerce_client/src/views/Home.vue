<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/landing1.png" height="250px">
    <HelloWorld msg="Book them now!!"/>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <button @click.prevent="logout" type="button" class="bg bg-danger">Sign Out</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
