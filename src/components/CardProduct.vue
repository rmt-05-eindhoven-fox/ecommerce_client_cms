<template>
  <div>
    <div class="card mb-2 rounded" style="width: 100%; height: 13em;">
      <div class="row no-gutters" style="height: 100%;">
        <div class="col-md-5 d-flex justify-content-center align-items-center" style="height: 100%;">
          <img
            style="
            max-height:100%;
            max-width: 100%;
            height:auto;
            width:auto;"
            :src="product.image_url" class="card-img" alt="...">
        </div>
        <div class="col-md-7">
          <div class="card-body p-2">
            <div class="row justify-content-center w-100 ml-0">
              <p class="card-title h2">{{ product.name }}</p>
            </div>
            <div class="row">
              <p class="col-6 card-text h5">{{ product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR"})}}</p>
              <p class="col-6 card-text h5">{{ product.stock }} pcs</p>
            </div>
            <div class="row justify-content-center">
              <div class="h5">{{ product.category }}</div>
            </div>
            <div class="row " style="justify-content: space-around">
              <b-button class="btn-dark" v-b-modal="'confirm'+product.id">
                <b-icon icon="trash-fill" class=""></b-icon>
              </b-button>
              <b-button class="btn-dark" @click="editProduct(product.id)">
                <b-icon icon="pencil-square" class=""></b-icon>
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      body-bg-variant="warning"
      :hide-header="true"
      :hide-footer="true"
      :id="'confirm'+product.id"
    >
      <div class="h4 text-center m-2">Are you sure want to delete product with name "{{ product.name }}"?</div>
      <div class="row mt-5" style="justify-content: space-around">
        <b-button class="btn-dark" @click="$bvModal.hide('confirm'+product.id)">Cancel</b-button>
        <b-button class="btn-danger" @click="delProduct(product.id)">Confirm</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>

export default {
  props: ['product'],
  methods: {
    delProduct (id) {
      this.$store.dispatch('deleteProduct', id)
      this.$bvModal.hide('confirm' + id)
    },
    editProduct (id) {
      this.$router.push(id + '/product')
    }
  }
}
</script>

<style>

</style>
