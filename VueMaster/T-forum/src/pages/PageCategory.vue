<template>
  <div class="col-full">
    <h1>{{ category.name }}</h1>
    <categori-list-item :category="category"></categori-list-item>
  </div>
</template>
<script>
import CategoryListItemVue from '../components/CategoryListItem.vue'
export default {
  name: 'page-category',
  props: {
    id: {
      required: true,
      type: String
    }
  },
  components: {
    'categori-list-item': CategoryListItemVue
  },
  computed: {
    category () {
      return this.$store.state.categories[this.id]
    }
  }
}
</script>