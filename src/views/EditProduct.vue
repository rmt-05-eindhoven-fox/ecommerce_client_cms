<template>
<div class="add-product">
  <div class="md-layout md-gutter md-alignment-top-center">
    <div class="md-layout-item md-size-15 md-medium-size-10 md-small-hide md-xsmall-hide"></div>
    <div class="md-layout-item">
      <div class="md-card add-product-card">
        <div class="md-card-content">
          <div class="md-layout md-gutter md-alignment-top-center">
            <div class="md-layout-item md-size-80">
              <div class="md-layout md-gutter md-alignment-top-center">
                <div class="md-layout-item md-size-40">
                  <div v-if="isUpdated">
                    <md-field>
                      <label>Image URL</label>
                      <md-input v-model="product.image_url"></md-input>
                    </md-field>
                    <md-button @click="changePicture" class="md-raised md-accent">Add Image</md-button>
                  </div>
                  <div v-else class="image-view">
                    <img :src="product.image_url" alt="" class="product_image">
                    <md-button @click="changePicture" class="md-accent md-raised">Change Picture</md-button>
                  </div>
                </div>
                <div class="md-layout-item">
                  <md-field>
                    <label>Product's name</label>
                    <md-input v-model="product.name"></md-input>
                  </md-field>
                  <div class="md-layout md-gutter md-alignment-top-center">
                    <div class="md-layout-item">
                      <md-field>
                        <md-icon>local_atm</md-icon>
                        <label>Price</label>
                        <md-input type="number" v-model="product.price"/>
                      </md-field>
                      <md-field>
                        <md-icon>local_offer</md-icon>
                        <label>Stock</label>
                        <md-input type="number" v-model="product.stock"/>
                      </md-field>
                    </div>
                    <div class="md-layout-item">
                      <div class="text-left">
                        <p>Categories <span @click="showAddCategory" class="add-span">Add</span></p>
                         <md-field v-if="isShow">
                          <label>Add Category</label>
                          <md-select v-model="selected_categories" multiple>
                            <md-option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}</md-option>
                          </md-select>
                          <md-button @click="addCategory" class="md-accent md-raised">Add</md-button>
                        </md-field>
                        <md-chip
                        v-for="category in getCategories"
                        :key="category.id" class="md-accent category-chip"
                        md-deletable
                        @md-delete="deleteCategory(category.id)"
                        >{{category.name}}</md-chip>
                        <md-chip v-if="!getCategories.length">No Category</md-chip>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="md-layout-item md-size-5">
                  <md-button @click="deleteProduct" class="md-accent"><md-icon>delete</md-icon></md-button>
                </div>
                <div class="description">
                  <md-field class="description-form">
                    <label>Description</label>
                    <md-textarea v-model="product.description" placeholder="Add product's description..."></md-textarea>
                  </md-field>
                </div>
              </div>
            </div>
          </div>
          <md-button @click="goToProduct" class="md-raised">Discard</md-button>
          <md-button @click="editProduct" class="md-raised md-accent">Update Product</md-button>
        </div>
      </div>
    </div>
    <div class="md-layout-item md-size-15 md-medium-size-10 md-small-hide md-xsmall-hide"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'EditProduct',
  data () {
    return {
      image_url: 'https://cdn.arstechnica.net/wp-content/uploads/2018/09/Mojave-Day.jpg',
      selected_categories: [],
      catName: '',
      isShow: false,
      isUpdated: false
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    },
    product () {
      return this.$store.state.detailProduct
    },
    getCategories () {
      const thisCategories = []
      this.$store.state.detailProduct.Product_Categories.forEach(el => {
        thisCategories.push(el.Category)
      })
      const data = thisCategories.map(el => {
        const res = {
          id: el.id,
          name: el.name
        }
        return res
      })
      return data
    }
  },
  methods: {
    goToProduct () {
      this.$router.push('/products')
    },
    editProduct () {
      const payload = {
        id: this.product.id,
        name: this.product.name,
        description: this.product.description,
        image_url: this.image_url,
        price: this.product.price,
        stock: this.product.stock
      }
      this.$store.dispatch('editProduct', payload)
        .then(({ data }) => {
          this.$router.push('/products')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCategories () {
      this.$store.dispatch('fetchCategories')
    },
    fetchProductDetail () {
      const payload = this.$route.params.id
      this.$store.dispatch('productDetail', payload)
    },
    showAddCategory () {
      this.isShow = true
    },
    addCategory () {
      const payload = {
        id: this.product.id,
        categories: this.selected_categories
      }
      this.$store.dispatch('addProductCategoryFromEdit', payload)
        .then(({ data }) => {
          this.isShow = false
          this.selected_categories = []
          this.fetchProductDetail()
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct () {
      const payload = {
        id: this.product.id
      }

      this.$store.dispatch('deleteProduct', payload)
    },
    deleteCategory (id) {
      const payload = {
        id: this.product.id,
        category: id
      }
      this.$store.dispatch('deleteProductCategory', payload)
        .then(({ data }) => {
          this.fetchProductDetail()
        })
        .catch(err => {
          console.log(err)
        })
    },
    changePicture () {
      this.isUpdated = !this.isUpdated
    }
  },
  created () {
    this.fetchProductDetail()
    this.fetchCategories()
    this.modelAssigning()
  },
  watch: {
    '$route.params.id': () => {
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

.add-span {
  margin-left: 2px;
  padding: 2px;
  color: white;
  background-color: #ff5252;
}

.add-span:hover {
  cursor: pointer;
}

.product_image {
  width: 25vw;
}
</style>
