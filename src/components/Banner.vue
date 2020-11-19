<template>
  <tr
  @click.prevent="editBanner(banner.id)">
    <td
    class="w-50"><img class="img-fluid img-thumbnail rounded mx-auto d-block" :src="banner.image_url" :alt="banner.title"></td>
    <td class="align-middle">
      <h3 class="font-weight-bold">{{ banner.title }}</h3>
      <p class="text-capitalize h5 text-muted font-italic"><i class="fas fa-tags"></i> {{ getCategoryById(banner.CategoryId).name }}</p>
      <span
      v-if="banner.status">
        <i class="fas fa-circle" style="color: green"></i> <span class="h6">Active</span>
      </span>
      <span
      v-else>
        <i class="fas fa-circle" style="color: red"></i> <span class="h6">Inactive</span>
      </span>
    </td>
    <td class="text-right align-top">
      <button
        @click.stop="deleteBanner(banner.id)"
        class="btn btn-danger mx-2"><i class="fas fa-trash-alt"></i>
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'Banner',
  props: ['banner'],
  methods: {
    getCategoryById (id) {
      return this.$store.getters.getCategoryById(id)
    },
    editBanner (id) {
      this.$router.push(`/home/banners/edit/${id}`)
    },
    deleteBanner (id) {
      this.$vToastify.prompt({
        body: 'Are you sure you want to delete this banner?',
        answers: { Yes: true, No: false }
      })
        .then((val) => {
          if (val) {
            return this.$store.dispatch('deleteBanner', id)
          } else {
            throw new Error('Cancel delete')
          }
        })
        .then(({ data }) => {
          this.$vToastify.success(data.message)
          this.$store.commit('filterDeleteBanner', id)
        })
        .catch(err => {
          console.log(err.message)
        })
    }
  }

}
</script>

<style scoped>
tr {
  cursor: pointer;
}

</style>
