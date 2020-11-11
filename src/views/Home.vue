<template>
 <section>
            <a href="#" class="navbar-brand">Kanban</a>
            <button  @click.prevent="logout" class="btn btn-primary my-2 my-sm-0" type="button">Logout</button>
            <button @click.prevent="fetchProduct" class="btn btn-primary my-2 my-sm-0" type="button">Fetch Data</button>
            <button @click.prevent="deleteProduct" class="btn btn-primary my-2 my-sm-0" type="button">Delete</button>
  <Slide>
    <a id="home" href="/">
      <span>Home</span>
    </a>
  </Slide>
  </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { Slide } from 'vue-burger-menu'
export default {
  name: 'Home',
  components: {
    Slide
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    },
    deleteData () {
      this.$store.dispatch('deleteData')
    }
  }
}
</script>
