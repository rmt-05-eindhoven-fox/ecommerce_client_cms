<template>
  <tr>
    <th scope="row">{{ no+1 }}</th>
    <td scope="row"><img :src="banner.img_Url" alt=""></td>
    <td scope="row">{{ banner.title }}</td>
    <td scope="row">{{ banner.status }}</td>
    <td scope="row">
      <button class="btn-sm btn-warning" data-toggle="modal" :data-target="'#modalEditBanner' + banner.id">Edit</button> |
      <EditBanner :banner="banner"/>
      <button class="btn-sm btn-danger" @click.prevent="deleteBanner">Delete</button>
    </td>
  </tr>
</template>

<script>
import EditBanner from '../components/EditBanner.vue'
export default {
  name: 'EachBanner',
  props: ['banner', 'no'],
  components: {
    EditBanner
  },
  methods: {
    deleteBanner () {
      const id = this.banner.id
      this.$store.dispatch('deleteBanner', id)
    }
  }
}
</script>

<style>

</style>
