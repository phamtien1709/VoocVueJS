<template>
  <div class="col-large push-top">
    <h1>{{thread.title}}</h1>
    <p>
      By
      <a href="#" class="link-unstyled">Robin</a>,
      <app-date :timestamp="thread.publishedAt"></app-date>.
      <span
        style="float:right; margin-top: 2px;"
        class="hide-mobile text-faded text-small"
      >3 replies by 3 contributors</span>
    </p>
    <post-list :posts="posts"></post-list>
    <post-editor @save="savePost" :threadId="id"></post-editor>
  </div>
</template>

<script>
  import sourceData from '@/data.json'
  import PostListVue from '../components/PostList.vue'
  import PostEditorVue from '../components/PostEditor.vue'

  console.log(sourceData)
  export default {
    name: 'thread-show',
    components: {
      'post-list': PostListVue,
      'post-editor': PostEditorVue
    },
    props: {
      id: {
        required: true,
        type: String
      }
    },
    data () {
      return {
        thread: sourceData.threads[this.id]
      }
    },
    computed: {
      posts () {
        const postId = Object.values(this.thread.posts)
        return Object.values(sourceData.posts)
          .filter(post => postId.includes(post['.key']))
      }
    },
    methods: {
      savePost (postData) {
        let post = postData.post
        let postId = postData.post['.key']
        this.$set(sourceData.posts, postId, post)
        this.$set(this.thread.posts, postId, postId)
        this.$set(sourceData.users[post.userId].posts, postId, postId)
      }
    }
  }
</script>