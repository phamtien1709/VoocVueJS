<template>
  <div class="forum-list">
    <h2 class="list-title">
      <router-link :to="{name: 'Category', params: {id: category['.key']}}">{{ category.name }}</router-link>
    </h2>
    <forum-list :forums="categoryForums"></forum-list>
  </div>
</template>
<script>
import sourceData from '../data.json'
import ForumListVue from './ForumList.vue'
export default {
  name: 'category-list-item',
  props: {
    category: {
      required: true,
      type: Object
    }
  },
  components: {
    'forum-list': ForumListVue
  },
  computed: {
    categoryForums () {
      return Object.values(sourceData.forums)
        .filter(forum => forum.categoryId == this.category['.key'])
    }
  }
}
</script>