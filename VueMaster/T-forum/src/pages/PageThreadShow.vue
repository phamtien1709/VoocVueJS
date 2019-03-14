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
  import PostListVue from '../components/PostList.vue'
  import PostEditorVue from '../components/PostEditor.vue'

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
        thread: this.$store.state.threads[this.id]
      }
    },
    computed: {
      posts () {
        const postId = Object.values(this.thread.posts)
        return Object.values(this.$store.state.posts)
          .filter(post => postId.includes(post['.key']))
      }
    },
    methods: {
      savePost (postData) {
        let post = postData.post
        let postId = postData.post['.key']
        this.$set(this.$store.state.posts, postId, post)
        this.$set(this.thread.posts, postId, postId)
        this.$set(this.$store.state.users[post.userId].posts, postId, postId)
      }
    }
  }
</script>