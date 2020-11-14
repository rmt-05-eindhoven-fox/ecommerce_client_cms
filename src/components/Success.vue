<template>
  <b-modal
    v-model="success"
    body-bg-variant="success"
    size="lg"
    @change="hide"
    :hide-header="true"
    :hide-footer="true"
    >
    <div class="h4 text-center text-white p-1 rounded">{{ successMessage }}</div>
  </b-modal>
</template>

<script>
import { mapState } from 'vuex'

export default {
  methods: {
    hide () {
      this.$store.commit('hideSuccess')
    }
  },
  computed: mapState(['success', 'successMessage'])
}
</script>

<style>

</style>
