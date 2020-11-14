<template>
  <div class="container">
    <div class="text-center mt-5">
      <h1>Edit Banner</h1>
    </div>
    <div class="form-add mt-3">
      <form @submit.prevent="postEditBanner">
        <div class="form-group">
          <label for="title">Banner Title:</label>
          <input class="form-control" type="text" v-model="banner.title">
        </div>
        <div class="form-group">
          <label for="image_url">Image Url:</label>
          <input class="form-control" type="url" v-model="banner.image_url">
        </div>
        <div class="form-group">
          <label for="status">Status:</label><br>
          <input type="radio" id="active" name="status" v-model="banner.status" value="Active">
          <label for="active">Active</label><br>
          <input type="radio" id="non-active" name="status" v-model="banner.status" value="Non-active">
          <label for="non-active">Non-Active</label><br>
        </div>
        <div class="form-group dropdown">
            <label for="category">
                <i class="fas fa-layer-group"></i>
                Choose a category:
            </label><br>
            <select class="form-control" name="category" id="category" v-model="banner.category">
                <option value="">---Select one---</option>
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
          <button class="btn btn-success btn-block" type="submit">Edit</button>
        </div>
      </form>
    </div>
    <div class="cancel mt-2 mb-5">
      <button @click.prevent="toBanner" class="btn btn-danger btn-block">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditBanner',
  data () {
    return {
      pageName: 'editBanner',
      banner: {
        title: '',
        image_url: '',
        status: '',
        category: ''
      }
    }
  },
  methods: {
    getBannerById () {
      const id = {
        id: this.$route.params.id
      }
      // console.log(this.$route.params.id)
      this.$store.dispatch('getBannerById', id.id)
        .then(res => {
          console.log(res, 'ini ressssss')
          this.banner.title = res.data.data.title
          this.banner.image_url = res.data.data.image_url
          this.banner.status = res.data.data.status
          this.banner.category = res.data.data.category
        })
        .catch(err => console.log(err.response))
    },
    toBanner () {
      this.$router.push('/banner')
    },
    postEditBanner () {
      this.$store.dispatch('editBanner', {
        id: this.$route.params.id,
        title: this.banner.title,
        image_url: this.banner.image_url,
        status: this.banner.status,
        category: this.banner.category
      })
      this.$router.push('/banner')
    }
  },
  created () {
    this.getBannerById()
  }
}
</script>

<style>

</style>
