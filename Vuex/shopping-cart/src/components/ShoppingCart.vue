<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li
        v-for="product in products"
        :key="product.id"
      >{{product.title}} - {{product.price | currency}} - {{product.quantity}}</li>
    </ul>
    <p>Total: {{total | currency}}</p>
    <button @click="$store.dispatch('checkout')">Checkout</button>
    <p v-if="checkoutStatus">{{$store.state.checkoutStatus}}</p>
  </div>
</template>
<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  name: 'shopping-cart',
  computed: {
    ...mapGetters('cart', {
        products: 'cartProducts',
        total: 'cartTotal'
      }),
    ...mapState('cart', {
      checkoutStatus: state => state.checkoutStatus
    })
  },
  methods: {
      ...mapActions('cart', ['checkout'])
    }
}
</script>