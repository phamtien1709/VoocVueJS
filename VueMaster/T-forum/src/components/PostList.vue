<template>
  <div class="post-list">
    <post-list-item v-for="post in posts" :key="post['.key']" :post="post"></post-list-item>
  </div>
</template>

<script>
import PostListItemVue from './PostListItem.vue'
export default {
  name: 'post-list',
  props: {
    posts: {
      required: true,
      type: Array
    }
  },
  components: {
    'post-list-item': PostListItemVue
  }
}
</script>