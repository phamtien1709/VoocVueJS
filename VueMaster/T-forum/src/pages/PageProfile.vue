<template>
  <div class="flex-grid">
    <user-profile-card v-if="!edit" :user="user"></user-profile-card>
    <user-profile-card-editor v-else :user="user"></user-profile-card-editor>
    <div class="col-7 push-top">
      <div class="profile-header">
        <span class="text-lead">{{user.username}}'s recent activity</span>
        <a href="#">See only started threads?</a>
      </div>
      <hr>
      <post-list :posts="userPosts"></post-list>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PostListVue from "../components/PostList.vue";
import UserProfileCardVue from "../components/UserProfileCard.vue";
import UserProfileCardEditorVue from "../components/UserProfileCardEditor.vue";

export default {
  name: "page-profile",
  props: {
    edit: {
      type: Boolean,
      default: false
    }
  },
  components: {
    "post-list": PostListVue,
    "user-profile-card": UserProfileCardVue,
    "user-profile-card-editor": UserProfileCardEditorVue
  },
  computed: {
    ...mapGetters({
      user: "authUser"
    }),

    userPosts() {
      if (this.user.posts) {
        return Object.values(this.$store.state.posts).filter(
          post => post.userId === this.user[".key"]
        );
      }
      return [];
    }
  }
};
</script>