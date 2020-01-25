export default {
  addWine: function ({ commit }, payload) {
    commit('appendWine', payload)
  },
  addToCart: function ({ commit }, payload) {
    commit('addToCart', payload)
  }
}
