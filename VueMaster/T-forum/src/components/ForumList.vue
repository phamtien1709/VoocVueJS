<template>
  <div>
    <forum-list-item v-for="forum in forums" :forum="forum" :key="forum['.key']"></forum-list-item>
  </div>
</template>
<script>
import ForumListItemVue from './ForumListItem.vue'
export default {
  name: 'forum-list',  
  components: {
    'forum-list-item': ForumListItemVue
  },
  props: {
    forums: {
      required: true,
      type: Array
    }
  }
}
</script>