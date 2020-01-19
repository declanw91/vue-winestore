export default {
  winesCount: function (state) {
    return state.reds.length + state.whites.length
  },
  getAllReds: function (state) {
    return state.wines.filter(function (item) {
      return item.Colour === 'Red'
    })
  }
}
