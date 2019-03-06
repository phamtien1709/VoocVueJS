<template>
  <div class="col-full">
    <h1>Oopss!</h1>
    <h3>Direct not found. Would you like
      <router-link :to="{name:'Home'}">go to Home page</router-link>??
    </h3>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style>
h1 {
  font-size: 100px;
}
h3 {
  font-size: 50px;
  font-weight: 100;
}
div {
  text-align: center;
}
</style>