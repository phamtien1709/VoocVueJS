<template>
  <div id="app">
    <img alt="logo" src="./assets/logo.png">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @import "../static/css/style.css"
</style>
