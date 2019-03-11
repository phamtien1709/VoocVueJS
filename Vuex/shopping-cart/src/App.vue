<template>
  <div id="app">
    <img src="./assets/logo.png">
    <product-list></product-list>
  </div>
</template>

<script>
import ProductListVue from './components/ProductList.vue'

export default {
  name: 'app',
  components: {
    'product-list': ProductListVue
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
