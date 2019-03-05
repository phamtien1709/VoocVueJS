<template>
<div>
  <div class="col-large push-top" v-for="thread in threads" :key="thread.id">
    <h1>{{thread.title}}</h1>
    <div class="post-list">
      <div class="post" v-for="postId in thread.posts" :key="thread.posts[postId]">
        <div class="user-info">
          <a href="#" class="user-name">{{users[posts[postId].userId].name}}</a>
          <a href="#">
            <img class="avatar-large" :src="users[posts[postId].userId].avatar" alt>
          </a>
          <p class="desktop-only text-small">107 posts</p>
        </div>

        <div class="post-content">
          <div>
          {{posts[postId].text}}
          </div>
        </div>
        <div class="post-date text-faded">{{posts[postId].publishedAt}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import sourceData from '../data.json';
//
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
