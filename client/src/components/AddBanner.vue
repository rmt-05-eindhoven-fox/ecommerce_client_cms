<template>
  <div class="container">
    <div class="text-center mt-5">
      <h1>Add Banner</h1>
    </div>
    <div class="form-add mt-3">
      <form @submit.prevent="postAddBanner">
        <div class="form-group">
          <label for="title">Banner Title:</label>
          <input class="form-control" type="text" v-model="title" placeholder="eg: Banner Shopee 11.11">
        </div>
        <div class="form-group">
          <label for="image_url">Image Url:</label>
          <input class="form-control" type="url" v-model="image_url" placeholder="eg: https://static.bhphoto.com/images.jpg">
        </div>
        <div class="form-group">
          <label for="status">Status:</label><br>
          <input type="radio" id="active" name="status" v-model="status" value="Active">
          <label for="active">Active</label><br>
          <input type="radio" id="non-active" name="status" v-model="status" value="Non-Active">
          <label for="non-active">Non-Active</label><br>
        </div>
        <div>
          <button class="btn btn-primary" type="submit">Add</button>
        </div>
      </form>
    </div>
    <div class="cancel mt-2 mb-5">
      <button @click="toHome" class="btn btn-danger">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      pageName: 'addProduct',
      title: '',
      image_url: '',
      status: ''
    }
  },
  methods: {
    toHome () {
      this.$router.push('/')
    },
    postAddBanner () {
      this.$store.dispatch('addBanner', {
        title: this.title,
        image_url: this.image_url,
        status: this.status
      })
      this.$router.push('/banner')
    }
  }
}
</script>

<style>

</style>
