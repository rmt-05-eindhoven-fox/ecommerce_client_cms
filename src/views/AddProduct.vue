<template>
<div class="add-product">
  <div class="md-layout md-gutter md-alignment-top-center">
    <div class="md-layout-item md-size-15 md-medium-size-10 md-small-hide md-xsmall-hide"></div>
    <div class="md-layout-item">
      <div class="md-card add-product-card">
        <div class="md-card-content">
          <div class="md-layout md-gutter md-alignment-top-center">
            <div class="md-layout-item md-size-70">
              <div class="md-layout md-gutter md-alignment-top-center">
                <div class="md-layout-item md-size-40">
                  <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
                </div>
                <div class="md-layout-item">
                  <md-field>
                    <label>Product's name</label>
                    <md-input v-model="name"></md-input>
                  </md-field>
                  <div class="md-layout md-gutter md-alignment-top-center">
                    <div class="md-layout-item">
                      <md-field>
                        <md-icon>local_atm</md-icon>
                        <label>Price</label>
                        <md-input type="number"/>
                      </md-field>
                      <md-field>
                        <md-icon>local_offer</md-icon>
                        <label>Stock</label>
                        <md-input type="number"/>
                      </md-field>
                    </div>
                    <div class="md-layout-item">
                      <div class="text-left">
                        <p>Categories</p>
                        <md-chip v-show="selected_categories.length" v-for="(chip, i) in selected_categories" :key="i" class="md-accent category-chip">{{chip}}</md-chip>
                        <md-chip v-show="!selected_categories.length">No category</md-chip>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="description">
                  <md-field class="description-form">
                    <label>Description</label>
                    <md-textarea v-model="textarea" placeholder="Add product's description..."></md-textarea>
                  </md-field>
                </div>
              </div>
            </div>
            <div class="md-layout-item">
              <h3>Categories</h3>
              <md-field>
                  <label>Add new category</label>
                  <md-input></md-input>
                </md-field>
              <div class="categories scrollable">
                <md-checkbox v-model="selected_categories" value="Shoes">Shoes</md-checkbox>
                <md-checkbox v-model="selected_categories" value="Bag">Bag</md-checkbox>
                <md-checkbox v-model="selected_categories" value="Watch">Watch</md-checkbox>
                <md-checkbox v-model="selected_categories" value="Sport">Sport</md-checkbox>
                <md-checkbox v-model="selected_categories" value="Swimwear">Swimwear</md-checkbox>
                <md-checkbox v-model="selected_categories" value="Apple">Apple</md-checkbox>
                <md-checkbox v-model="selected_categories" value="Judy">Judy judy bo budy</md-checkbox>
              </div>
            </div>
          </div>
          <md-button @click="goToProduct" class="md-raised">Discard</md-button>
          <md-button class="md-raised md-accent">Add Product</md-button>
        </div>
      </div>
    </div>
    <div class="md-layout-item md-size-15 md-medium-size-10 md-small-hide md-xsmall-hide"></div>
  </div>
</div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  name: 'AddProduct',
  data () {
    return {
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 200,
        maxFilesize: 0.5,
        dictDefaultMessage: 'Drop image here to upload'
      },
      name: '',
      categories: [
        'Shoes',
        'Bag',
        'Watch'
      ],
      selected_categories: []
    }
  },
  components: {
    vueDropzone: vue2Dropzone
  },
  methods: {
    goToProduct () {
      this.$router.push('/products')
    }
  }
}
</script>

<style>
.add-product-card {
  margin-top: 16px;
  background-color: #fff;
  border-radius: 20px;
}

#dropzone {
  height: 25vh;
  width: 15vw;
}

.category-chip {
  margin-top: 4px;
}

.description {
  margin-top: 8px;
}

.description-form {
  width: 43vw;
}

.categories {
  margin-left: 8px;
  max-height: 31vh;
  overflow: auto;
}

.md-checkbox {
    display: flex;
  }
</style>
