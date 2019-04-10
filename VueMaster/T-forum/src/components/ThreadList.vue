<template>
  <div>
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>
      <thread-list-item v-for="thread in threads" :key="thread['key']" :thread="thread"></thread-list-item>
    </div>
  </div>
</template>

<script>
import ThreadListItemVue from "./ThreadListItem.vue";

export default {
  name: "ThreadList",
  data() {
    return {
      threadsSource: 0
    };
  },
  components: {
    "thread-list-item": ThreadListItemVue
  },
  props: {
    threads: {
      required: true,
      type: Array
    }
  }
};
</script>