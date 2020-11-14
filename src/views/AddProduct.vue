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
                  <div v-if="!isImageShow">
                    <md-field>
                      <label>Image URL</label>
                      <md-input v-model="image_url"></md-input>
                    </md-field>
                    <md-button @click="addImage" class="md-raised md-accent">Add Image</md-button>
                  </div>
                  <div v-else>
                    <img :src="image_url" alt="product-image" class="product-image">
                    <md-button @click="addImage" class="md-raised md-accent">Change image</md-button>
                  </div>
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
                        <md-input type="number" v-model="price"/>
                      </md-field>
                      <md-field>
                        <md-icon>local_offer</md-icon>
                        <label>Stock</label>
                        <md-input type="number" v-model="stock"/>
                      </md-field>
                    </div>
                    <div class="md-layout-item">
                      <div class="text-left">
                        <p>Categories</p>
                        <md-chip v-for="(chip, i) in selected_categories" :key="i" class="md-accent category-chip">{{categoryName(chip)}}</md-chip>
                        <md-chip v-show="!selected_categories.length">No Category</md-chip>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="description">
                  <md-field class="description-form">
                    <label>Description</label>
                    <md-textarea v-model="description" placeholder="Add product's description..."></md-textarea>
                  </md-field>
                </div>
              </div>
            </div>
            <div class="md-layout-item">
              <h3>Categories</h3>
              <md-field>
                  <label>Add new category</label>
                  <md-input
                  @keyup.enter.prevent="addCategory"
                  v-model="catName"
                  ></md-input>
                </md-field>
              <div class="categories scrollable">
                <md-checkbox
                v-for="category in categories"
                :key="category.id"
                v-model="selected_categories"
                :value="category.id"
                >{{ category.name }}</md-checkbox>
              </div>
            </div>
          </div>
          <md-button @click="goToProduct" class="md-raised">Discard</md-button>
          <md-button @click="addProduct" class="md-raised md-accent">Add Product</md-button>
        </div>
      </div>
    </div>
    <div class="md-layout-item md-size-15 md-medium-size-10 md-small-hide md-xsmall-hide"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      price: '',
      stock: '',
      description: '',
      image_url: '',
      selected_categories: [],
      catName: '',
      isImageShow: false
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  },
  methods: {
    goToProduct () {
      this.$router.push('/products')
    },
    addProduct () {
      const payload = {
        name: this.name,
        description: this.description,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addProduct', payload)
        .then(({ data }) => {
          const payload2 = {
            id: data.id,
            categories: this.selected_categories
          }
          this.$store.dispatch('addProductCategory', payload2)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCategories () {
      this.$store.dispatch('fetchCategories')
    },
    categoryName (id) {
      let name = ''
      this.categories.forEach(el => {
        if (el.id === id) {
          name = el.name
        }
      })
      return name
    },
    addCategory () {
      const payload = {
        name: this.catName
      }
      this.$store.dispatch('addCategory', payload)
        .then(({ data }) => {
          this.fetchCategories()
          this.catName = ''
        })
        .catch(err => {
          console.log(err)
        })
    },
    addImage () {
      this.isImageShow = !this.isImageShow
    }
  },
  created () {
    this.fetchCategories()
  }
}
</script>

<style>
.add-product-card {
  margin-top: 16px;
  background-color: #fff;
  border-radius: 20px;
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
