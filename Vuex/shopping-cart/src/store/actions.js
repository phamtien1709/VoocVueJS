import shop from '../api/shop'

export default {
  fetchProducts(context) {
    // make the call
    return new Promise((resolve) => {
      // make the call
      // call setProducts mutation
      shop.getProducts(products => {
        context.commit('setProducts', products)
        resolve()
      })
    })
  },

  addProductToCart({ state, getters, commit }, product) {
    if (getters.productIsInStock(product)) {
      const cartItem = state.cart.items.find(item => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', product.id)
      } else {
        commit('incrementItemQuantity', cartItem)
      }
      commit('decrementProductInventory', product)
    }
  },

  checkout(context) {
    shop.buyProducts(
      context.state.cart,
      () => {
        context.commit('emptyCart')
        context.commit('setCheckoutStatus', 'success')
      },
      () => {
        context.commit('setCheckoutStatus', 'fail')
      }
    )
  }
}