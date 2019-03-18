<template>
  <div class="col-full push-top">
    <h1>
      Create new thread in
      <i>{{forum.name}}</i>
    </h1>
    <thread-editor @save="save" @cancel="cancel"></thread-editor>
  </div>
</template>

<script>
import ThreadEditorVue from "../components/ThreadEditor.vue";
export default {
  name: "page-thread-create",
  props: {
    forumId: {
      required: true,
      type: String
    }
  },
  components: {
    "thread-editor": ThreadEditorVue
  },
  computed: {
    forum() {
      return this.$store.state.forums[this.forumId];
    }
  },
  methods: {
    save({ title, text }) {
      this.$store
        .dispatch("createThread", {
          title,
          text,
          forumId: this.forum[".key"]
        })
        .then(thread => {
          this.$router.push({
            name: "ThreadShow",
            params: { id: thread[".key"] }
          });
        });
    },
    cancel() {
      this.$router.push({
        name: "Forum",
        params: { id: this.forum[".key"] }
      });
    }
  }
};
</script>
