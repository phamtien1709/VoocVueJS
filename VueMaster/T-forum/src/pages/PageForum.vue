<template>
  <div class="forum-wrapper">
    <div v-if="forum" class="col-full push-top">
      <div class="forum-header">
        <div class="forum-details">
          <h1>{{forum.name}}</h1>
          <p class="text-lead">{{forum.description}}</p>
        </div>
        <router-link
          :to="{name: 'ThreadCreate', params: {forumId: this.forum['.key']}}"
          class="btn-green btn-small"
        >Start a thread</router-link>
      </div>
    </div>

    <div class="col-full push-top">
      <thread-list :threads="threads"></thread-list>
    </div>
  </div>
</template>
<script>
import ThreadListVue from "../components/ThreadList.vue";

export default {
  name: "page-forum",
  components: {
    "thread-list": ThreadListVue
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    forum() {
      return this.$store.state.forums[this.id];
    },
    threads() {
      return Object.values(this.$store.state.threads).filter(
        thread => thread.forumId === this.id
      );
    }
  },
  created() {
    this.$store.dispatch("fetchForum", { id: this.id }).then(forum => {
      this.$store
        .dispatch("fetchThreads", { ids: forum.threads })
        .then(threads => {
          threads.forEach(thread =>
            this.$store.dispatch("fetchUser", { id: thread.userId })
          );
        });
    });
  }
};
</script>
<style scoped>
.forum-wrapper {
  width: 100%;
}
</style>