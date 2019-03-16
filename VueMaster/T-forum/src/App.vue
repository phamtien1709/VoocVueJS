<template>
  <div id="app">
    <the-nav-bar></the-nav-bar>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import TheNavBarVue from './components/TheNavBar.vue'
export default {
  name: 'app',
  components: {
    'the-nav-bar': TheNavBarVue
  }
}
</script>

<style>
@import "../static/css/style.css";
</style>
