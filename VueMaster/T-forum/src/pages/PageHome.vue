<template>
  <div class="col-full">
    <thread-list :threads="threads"></thread-list>
  </div>
</template>

<script>
import sourceData from '../data.json'
import ThreadListVue from '../components/ThreadList.vue'
//
export default {
  name: 'PageHome',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      threads: Object.values(sourceData.threads),
      posts: sourceData.posts,
      users: sourceData.users
    }
  },
  components: {
    'thread-list': ThreadListVue
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
