<template>
  <div>
    <h1>Product List</h1>
    <ul>
      <li v-for="product in products" :key="product.id">{{product.title}} - {{product.price}}</li>
    </ul>
  </div>
</template>
<script>
  import shop from '../api/shop.js'
  export default {
    name: 'product-list',
    data () {
      return {
        loading: false
      }
    },
    computed: {
      products () {
        return this.$store.getters.availableProducts
      }
    },
    created () {
      this.loading = true
      this.$store.dispatch('fetchProducts')
        .then(() => this.loading = false)
    }
  }
</script>