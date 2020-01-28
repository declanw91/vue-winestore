export default {
  winesCount: function (state) {
    return state.redWines.length + state.whiteWines.length + state.roseWines.length
  },
  getAllReds: function (state) {
    return state.wines.filter(function (item) {
      return item.Colour === 'Red'
    })
  },
  getRegionalWine: function (state) {
    return state.wines.filter(function (item) {
      return item.Region === ''
    })
  },
  getCartItems: function (state) {
    return state.cartItems
  }
}
