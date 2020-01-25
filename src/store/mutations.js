export default {
  appendWine: function (state, { Colour, wine }) {
    const wineList = Colour.toLowerCase() + 'Wines'
    state[wineList].push(wine)
  },
  addToCart: function (state, { quantity, price }) {
    const orderPrice = quantity * Number(price)
    const cartTotalPrice = Number(state.cartTotal) + orderPrice
    state.cartTotal = Number(cartTotalPrice).toFixed(2)
    state.cartCount = state.cartCount + quantity
  },
  updateSelectedQuantity: function (state, { quantity }) {
    state.selectedQuanaity = Number(quantity)
  },
  updateSelectedId: function (state, { id }) {
    state.selectedId = Number(id)
  }
}
