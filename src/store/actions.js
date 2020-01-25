export default {
  addWine: function ({ commit }, payload) {
    commit('appendWine', payload)
  },
  addToCart: function ({ commit }, payload) {
    commit('addToCart', payload)
  },
  updateSelectedQuantity: function ({ commit }, payload) {
    commit('updateSelectedQuantity', payload)
  },
  updateSelectedId: function ({ commit }, payload) {
    commit('updateSelectedId', payload)
  }
}
