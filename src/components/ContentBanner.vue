<template>
  <div class="card mt-2">
    <div class="card-body row">
      <div class="col-6 text-center">
        <img :src="banner.image_url" alt="Product Image">
      </div>
      <div class="col-6">
        <h2 class="card-title">{{ banner.title }}</h2>
        <h5 v-if="banner.status === true" class="card-text">Status  : Active</h5>
        <h5 v-else class="card-text">Status  : Inactive</h5>
        <button @click="editBanner" class="btn btn-primary">Edit</button>
        <button style="margin-left: 15px" @click="willDelete(banner.id)" class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
export default {
  name: 'ContentBanner',
  props: ['banner'],
  methods: {
    editBanner () {
      const id = this.banner.id
      this.$loading(true)
      setTimeout(() => {
        this.$loading(false)
        this.$router.push(`editBanner/${id}`)
      }, 500)
    },
    willDelete (id) {
      swal({
        title: 'Are you sure?',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            swal({
              text: 'Successfully deleted',
              buttons: false,
              timer: 1000,
              icon: 'success'
            })
            this.deleteBanner(id)
          }
        })
    },
    deleteBanner () {
      const id = this.banner.id
      this.$store.dispatch('deleteBanner', id)
        .then(data => {
          this.$store.dispatch('fetchBanners')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.103);
}
img {
  max-height: 150px;
}
</style>
