<template>
  <div class="bg-blue-500 h-screen items-center flex">
      <div class="m-auto w-1/3 h-auto bg-green-500 flex-col">
        <div>
            {{ logo }}
        </div>
        <form action="" class="flex-col">
            <div>
            <input type="text" placeholder="Email"/>
            </div>
            <div>
            <input type="password" placeholder="Password"/>
            </div>
            <div>
            <button type="submit" class="bg-red-500">Submit</button>
            </div>
        </form>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  computed: {
    logo () {
      return this.$store.state.test
    }
  }
}
</script>

<style>

</style>
