<template>
  <div class="col-large push-top">
    <h1>{{thread.title}}</h1>
    <router-link
      :to="{name: 'ThreadEdit', params: {id: this.thread['.key']}}"
      class="btn-green btn-small"
    >Edit thread</router-link>
    <p>
      By
      <a href="#" class="link-unstyled">{{user.name}}</a>,
      <app-date :timestamp="thread.publishedAt"></app-date>.
      <span
        style="float:right; margin-top: 2px;"
        class="hide-mobile text-faded text-small"
      >{{repliesCount}} replies by {{contributorsCount}} contributors</span>
    </p>
    <post-list :posts="posts"></post-list>
    <post-editor :threadId="id"></post-editor>
  </div>
</template>

<script>
import PostListVue from "../components/PostList.vue";
import PostEditorVue from "../components/PostEditor.vue";

export default {
  name: "thread-show",
  components: {
    "post-list": PostListVue,
    "post-editor": PostEditorVue
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    posts() {
      const postId = Object.values(this.thread.posts);
      return Object.values(this.$store.state.posts).filter(post =>
        postId.includes(post[".key"])
      );
    },
    user() {
      return this.$store.state.users[this.thread.userId];
    },
    thread() {
      return this.$store.state.threads[this.id];
    },
    repliesCount() {
      return this.$store.getters.threadRepliesCount(this.thread[".key"]);
    },
    contributorsCount() {
      // find the replies
      const replies = Object.keys(this.thread.posts)
        .filter(postId => postId !== this.thread.firstPostId)
        .map(postId => this.$store.state.posts[postId]);
      // get the user ids
      const userIds = replies.map(post => post.userId);
      // count the unique ids
      return userIds.filter((item, index) => index === userIds.indexOf(item))
        .length;
    }
  }
};
</script>