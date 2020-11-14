<template>
  <b-modal
    v-model="error"
    body-bg-variant="danger"
    size="lg"
    @change="hide"
    :hide-header="true"
    :hide-footer="true"
    >
    <div v-for="(err, i) in errorMessage" :key="i" class="h4 text-center text-white p-1 rounded">{{ err }}</div>
  </b-modal>
</template>

<script>
import { mapState } from 'vuex'

export default {
  methods: {
    hide () {
      this.$store.commit('hideError')
    }
  },
  computed: mapState(['error', 'errorMessage'])
}
</script>

<style>

</style>
