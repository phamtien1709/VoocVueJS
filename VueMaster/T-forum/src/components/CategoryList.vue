<template>
  <div>
    <category-list-item v-for="category in categories" :category="category" :key="category['.key']"></category-list-item>
  </div>
</template>
<script>
import CategoryListItemVue from './CategoryListItem.vue'
export default {
  name: 'category-list',
  components: {
    'category-list-item': CategoryListItemVue
  },
  props: {
    categories: {
      required: true,
      type: Array
    }
  }
}
</script>