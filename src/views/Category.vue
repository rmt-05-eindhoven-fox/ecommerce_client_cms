<template>
  <div class="categories">
    <div class="md-layout md-gutter md-alignment-top-center">
      <div class="md-layout-item md-size-25 md-medium-size-20 md-small-10 md-xsmall-10"></div>
      <div class="md-layout-item">
        <h1>Categories</h1>
        <div v-if="!categories.length" class="empty-state">
          <img class="empty-illustration" src="../assets/NoCategory-illustration.svg" alt="empty-state">
          <h4 class="text-muted empty-state-info">Category not found</h4>
        </div>
        <md-field>
          <label>Add category</label>
          <md-input
          v-model="name"
          @keyup.enter.prevent="addCategory"
          ></md-input>
          <md-button
          @click="addCategory"
          class="md-accent md-raised"
          >Add</md-button>
        </md-field>
        <md-chip
        v-for="category in categories"
        :key="category.id" class="md-accent category-chip"
        md-deletable
        @md-delete="deleteCategory(category.id)"
        >{{category.name}}</md-chip>
        <md-chip v-if="!categories.length">No Category</md-chip>
      </div>
      <div class="md-layout-item md-size-25 md-medium-size-20 md-small-10 md-xsmall-10"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    fetchCategory () {
      this.$store.dispatch('fetchCategories')
    },
    addCategory () {
      const payload = {
        name: this.name
      }
      this.$store.dispatch('addCategory', payload)
        .then(({ data }) => {
          this.fetchCategory()
          this.name = ''
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteCategory (id) {
      const payload = {
        id
      }
      this.$store.dispatch('deleteCategory', payload)
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  },
  created () {
    this.fetchCategory()
  }
}
</script>

<style>
.empty-illustration {
  margin-top: 40px;
}

.empty-illustration {
  width: 20vw;
  margin-bottom: 16px;
}

.category-chip {
  margin-top: 16px;
}
</style>
