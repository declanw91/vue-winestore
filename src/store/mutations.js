export default {
  appendWine: function (state, { Colour, wine }) {
    const wineList = Colour.toLowerCase() + 'Wines'
    state[wineList].push(wine)
  },
  addToCart: function (state, { quantity, item }) {
    const orderPrice = quantity * Number(item.Price)
    const cartTotalPrice = Number(state.cartTotal) + orderPrice
    state.cartTotal = Number(cartTotalPrice).toFixed(2)
    state.cartCount = Number(state.cartCount) + quantity
    state.cartItems.push(item)
  },
  updateSelectedQuantity: function (state, { quantity }) {
    state.selectedQuantity = Number(quantity)
  },
  updateSelectedId: function (state, { id }) {
    state.selectedId = Number(id)
  },
  updateSelectedWine: function (state, { wine }) {
    state.selectedWine = wine
  }
}
