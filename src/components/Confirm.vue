<template>
  <b-modal
    v-model="error"
    body-bg-variant="danger"
    size="lg"
    id="confirmation"
    @change="hide"
    :hide-header="true"
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
  computed: mapState(['error', 'errorMessage']),
  mounted () {
    setTimeout(() => {
      // this.error = false
      // this.$store.commit('hideError')
    }, 2000)
  }
}
</script>

<style>

</style>
