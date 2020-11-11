<template>
  <div class="speed-add">
    <md-speed-dial class="md-bottom-right">
      <md-speed-dial-target>
        <md-icon class="md-morph-initial">add</md-icon>
        <md-icon class="md-morph-final">edit</md-icon>
      </md-speed-dial-target>

      <md-speed-dial-content>
        <md-button class="md-icon-button">
          <md-icon>view_carousel</md-icon>
          <md-tooltip md-direction="left">Banner</md-tooltip>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>category</md-icon>
          <md-tooltip md-direction="left">Category</md-tooltip>
        </md-button>

        <md-button @click="goToAdd" class="md-icon-button">
          <md-icon>shopping_bag</md-icon>
          <md-tooltip md-direction="left">Product</md-tooltip>
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>
  </div>
</template>

<script>
export default {
  name: 'SpeedDial',
  methods: {
    goToAdd () {
      this.$router.push('products/add')
    }
  }
}
</script>

<style>

</style>
