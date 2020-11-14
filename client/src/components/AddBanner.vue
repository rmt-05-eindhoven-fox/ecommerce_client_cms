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
        <div class="form-group dropdown">
            <label for="category">
                <i class="fas fa-layer-group"></i>
                Choose a category:
            </label><br>
            <select class="form-control" name="category" id="category" v-model="category">
                <option value="" disabled>---Select one---</option>
                <option value="SmartWatch">SmartWatch</option>
                <option value="Laptop">Laptop</option>
                <option value="SmartPhone">SmartPhone</option>
                <option value="Tablet">Tablet</option>
                <option value="PowerBank">PowerBank</option>
                <option value="Aksesoris">Aksesoris</option>
                <option value="Lainnya">Lainnya</option>
            </select>
        </div>
        <div>
          <button class="btn btn-primary btn-block" type="submit">Add</button>
        </div>
      </form>
    </div>
    <div class="cancel mt-2 mb-5">
      <button @click="toHome" class="btn btn-danger btn-block">Cancel</button>
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
      status: '',
      category: ''
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
        status: this.status,
        category: this.category
      })
      this.$router.push('/banner')
    }
  }
}
</script>

<style>

</style>
