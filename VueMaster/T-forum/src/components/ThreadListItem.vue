<template>
  <div v-if="thread && user" class="thread">
    <div>
      <p>
        <router-link :to="{name:'ThreadShow', params:{id:thread['.key']}}">{{thread.title}}</router-link>
      </p>
      <p class="text-faded text-xsmall">
        By
        <a>{{user.name}}</a>
        ,
        <app-date :timestamp="thread.publishedAt"></app-date>.
      </p>
    </div>

    <div class="activity">
      <p class="replies-count">{{replyCount}} replies</p>

      <!--<img class="avatar-medium" src="http://i0.kym-cdn.com/photos/images/facebook/000/010/934/46623-batman_pikachu_super.png" alt="">-->
      <!--<div>-->
      <!--<p class="text-xsmall">-->
      <!--<a href="#">Bruce Wayne</a>-->
      <!--</p>-->
      <!--<p class="text-xsmall text-faded">2 hours ago</p>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
import { countObjectProperties } from "../utils/index.js";

export default {
  name: "ThreadListItem",
  props: {
    thread: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      usersData: this.$store.state.users
    };
  },
  computed: {
    replyCount() {
      return this.$store.getters.threadRepliesCount(this.thread[".key"]);
    },
    user() {
      return this.usersData[this.thread.userId];
    }
  }
};
</script>