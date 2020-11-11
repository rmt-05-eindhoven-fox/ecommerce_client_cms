<template>
  <div>
    <div id="nav">
      <ul>
        <li><router-link to='/dashboard'>Dashboard </router-link></li>
        <li><router-link to='/add-product'>Add Product </router-link></li>
      </ul>
      <a @click.prevent="logOut" class="logout" href="">Log Out</a>
    </div>
    <h1>Add Product Page</h1>
    <AddForm />
  </div>
</template>

<script>
import AddForm from '@/components/AddForm.vue'

export default {
  name: 'AddProduct',
  components: {
    AddForm
  },
  methods: {
    logOut () {
      localStorage.clear()
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>
