<template>
  <div class="products">
    <div class="md-layout md-gutter md-alignment-top-center">
      <div class="md-layout-item md-size-10 md-medium-size-10 md-small-hide md-xsmall-hide"></div>
      <div class="md-layout-item md-size-25 md-medium-size-25 md-small-size-25 md-xsmall-hide">
        <h2 class="title">Search Product</h2>
        <md-card class="search-card">
          <md-card-header>
            <md-field>
              <md-icon>search</md-icon>
              <label>Search</label>
              <md-input
              @keyup.enter.prevent="searchProduct"
              v-model="search"
              ></md-input>
              <span class="md-helper-text case-sensitive">case sensitive</span>
            </md-field>
          </md-card-header>
        </md-card>
        <h2 class="title">Categories</h2>
        <md-card class="category-card">
          <md-card-content>
            <md-list class="category-content scrollable">
              <md-list-item>
                <md-button
                class="md-list-item-text category-list"
                :class="{'selected-category' : !isCategory}"
                @click="goToProducts"
                >All Products</md-button>
              </md-list-item>
              <CategorySidebar
              v-for="category in categories"
              :key="category.id"
              :category="category"
              ></CategorySidebar>
            </md-list>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item main-content">
        <ProductsContent
        v-if="!isCategory"
        :products='products'
        :title='title'
        ></ProductsContent>
        <router-view />
      </div>
      <div class="md-layout-item md-size-10 md-medium-size-10 md-small-hide md-xsmall-hide"></div>
    </div>
  </div>
</template>

<script>
import CategorySidebar from '../components/CategoryListSidebar'
import ProductsContent from '../components/ProductsContent'

export default {
  name: 'Products',
  components: {
    CategorySidebar,
    ProductsContent
  },
  data () {
    return {
      title: 'All Products',
      search: ''
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    categories () {
      return this.$store.state.categories
    },
    isCategory () {
      if (this.$route.params.id) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    fetchCategories () {
      this.$store.dispatch('fetchCategories')
    },
    goToProducts () {
      this.fetchProducts()
      this.$router.push('/products')
    },
    searchProduct () {
      const payload = this.search
      this.$store.dispatch('searchProduct', payload)
    }
  },
  created () {
    this.fetchProducts()
    this.fetchCategories()
  }
}
</script>

<style>
  .search-card {
    margin-top: 16px;
    border-radius: 15px;
    margin-bottom: 16px;
  }

  .category-card {
    margin-top: 16px;
    border-radius: 15px;
  }

  .category-content {
    padding-top: 0;
    padding-bottom: 0;
    height: 30vh;
    overflow: auto;
  }

  .selected-category {
    background-color: #ff5252;
    color: white !important;
  }

  .empty-illustration {
    width: 60%;
    margin-top: 12px;
  }

  .case-sensitive {
    margin-left: 32px;
  }

  .category-list {
    margin: 0;
  }
</style>
