<template>
  <tr>
    <th scope="row">{{ banner.id }}</th>
    <td>{{ banner.title }}</td>
    <td><img :src="banner.image_url" onerror="this.src='https://www.metrorollerdoors.com.au/wp-content/uploads/2018/02/unavailable-image.jpg'" alt="image_not_found" width="auto" height="300"></td>
    <td>{{ banner.status }}</td>
    <td>
      <button @click.prevent="goToEditBanner(banner.id)" type="button" class="btn btn-info">Edit</button> ||
      <button @click="deleteBanner(banner.id)" type="button" class="btn btn-danger">Delete</button>
    </td>
  </tr>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'BannerItem',
  props: ['banner'],
  methods: {
    goToEditBanner (id) {
      this.$router.push({ name: 'EditBanner', params: { id: id } })
    },
    deleteBanner (id) {
      const accessToken = localStorage.getItem('access_token')
      const payload = {
        id,
        access_token: accessToken
      }
      Swal.fire({
        title: 'Delete',
        text: 'Are you sure want to delete this Task?',
        icon: 'warning',
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        showCancelButton: true,
        confirmButtonText: 'Delete'
      })
        .then((result) => {
          if (result.isConfirmed) {
            return this.$store.dispatch('deleteBanner', payload)
          }
        })
        .then(({ data }) => {
          const accessToken = localStorage.getItem('access_token')
          this.$store.dispatch('fetchBanners', accessToken)
          Swal.fire('Banner deleted succesfully!', '', 'success')
        })
        .catch(({ response }) => {
          const err = response.data.msg
          Swal.fire('Error', err, 'error')
        })
    }
  }
}
</script>

<style>

</style>
